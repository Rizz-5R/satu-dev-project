import { useState, useCallback } from 'react';
import quizData from '../data/quiz/quizData.json';
import { loadProgress, completeLevel, resetProgress } from '../utils/quizStorage';

const QUESTIONS_PER_LEVEL = quizData.meta.questionsPerLevel;
const TOTAL_LEVELS = quizData.meta.totalLevels;
const getQuestions = (level) => quizData[`level${level}`] ?? [];

const calcScore = (questions, answers) =>
  questions.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0);

export const useQuiz = () => {
  // ── Persistent progress (from localStorage) ───────────────────────────────
  const [progress, setProgress] = useState(() => loadProgress());

  // ── Phase & navigation ─────────────────────────────────────────────────────
  const [phase, setPhase] = useState('level-select'); // see JSDoc above for values
  const [currentLevel, setCurrentLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // ── Per-question state ─────────────────────────────────────────────────────
  const [selectedAnswer, setSelectedAnswer] = useState(null); // index | null
  const [showFeedback, setShowFeedback] = useState(false);

  // ── Answers log (array of chosen indices per question) ─────────────────────
  const [answers, setAnswers] = useState([]);

  // ── Derived values ─────────────────────────────────────────────────────────
  const questions = currentLevel ? getQuestions(currentLevel) : [];
  const activeQuestion = questions[currentQuestion] ?? null;
  const score = currentLevel ? calcScore(questions, answers) : 0;
  const isPassed = score === QUESTIONS_PER_LEVEL;
  const isLastLevel = currentLevel === TOTAL_LEVELS;
  const isLastQuestion = currentQuestion === questions.length - 1;

  // ── Actions ────────────────────────────────────────────────────────────────

  /** Start a specific level. Level must be unlocked. */
  const startLevel = useCallback((level) => {
    if (!progress.unlocked[`level${level}`]) return;
    setCurrentLevel(level);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setAnswers([]);
    setPhase('question');
  }, [progress]);

  /** User taps an option button. Only effective before feedback is shown. */
  const selectAnswer = useCallback((optionIndex) => {
    if (showFeedback) return;
    setSelectedAnswer(optionIndex);
  }, [showFeedback]);

  /** User presses "Cek Jawaban". Locks in the answer and shows feedback. */
  const checkAnswer = useCallback(() => {
    if (selectedAnswer === null) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[currentQuestion] = selectedAnswer;
      return next;
    });
    setShowFeedback(true);
  }, [selectedAnswer, currentQuestion]);

  /** User presses "Soal Berikutnya". Advance or show results. */
  const nextQuestion = useCallback(() => {
    if (isLastQuestion) {
      // Level done — persist progress then show result
      const finalAnswers = [...answers];
      finalAnswers[currentQuestion] = selectedAnswer;
      const finalScore = calcScore(questions, finalAnswers);
      const passed = finalScore === QUESTIONS_PER_LEVEL;

      const updatedProgress = completeLevel(currentLevel, passed);
      setProgress(updatedProgress);

      if (isLastLevel && passed) {
        setPhase('complete');
      } else {
        setPhase('result');
      }
    } else {
      setCurrentQuestion((q) => q + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  }, [isLastQuestion, isLastLevel, answers, currentQuestion, selectedAnswer, questions, currentLevel]);

  /** Retry the current level from scratch. */
  const retryLevel = useCallback(() => {
    startLevel(currentLevel);
  }, [currentLevel, startLevel]);

  /** Go back to the level selection screen. */
  const goToLevelSelect = useCallback(() => {
    setPhase('level-select');
    setCurrentLevel(null);
  }, []);

  /** Advance to next level after a pass. */
  const goToNextLevel = useCallback(() => {
    startLevel(currentLevel + 1);
  }, [currentLevel, startLevel]);

  /** Dev utility: wipe all progress. */
  const resetAll = useCallback(() => {
    const fresh = resetProgress();
    setProgress(fresh);
    setPhase('level-select');
    setCurrentLevel(null);
  }, []);

  // ── Computed helpers for UI ────────────────────────────────────────────────
  const getLevelStatus = (level) => ({
    number: level,
    isUnlocked: progress.unlocked[`level${level}`] === true,
    isCompleted: progress[`level${level}`] === true,
  });

  const isCorrect = selectedAnswer !== null && selectedAnswer === activeQuestion?.answer;

  return {
    // State
    phase,
    currentLevel,
    currentQuestion,
    selectedAnswer,
    showFeedback,
    answers,
    score,
    questions,
    activeQuestion,
    progress,

    // Computed
    isPassed,
    isLastLevel,
    isLastQuestion,
    isCorrect,

    // Helpers
    getLevelStatus,
    totalLevels: TOTAL_LEVELS,
    questionsPerLevel: QUESTIONS_PER_LEVEL,

    // Actions
    startLevel,
    selectAnswer,
    checkAnswer,
    nextQuestion,
    retryLevel,
    goToLevelSelect,
    goToNextLevel,
    resetAll,
  };
};
