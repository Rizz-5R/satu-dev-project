import { useQuiz } from '../../hooks/useQuiz';
import LevelCard    from './LevelCard';
import QuizCard     from './QuizCard';
import QuestionCard from './QuestionCard';
import ResultCard   from './ResultCard';

// ── Final completion screen (all 3 levels done) ────────────────────────────
const CompletionScreen = ({ onHome }) => (
  <div className="w-full max-w-md mx-auto text-center py-8">
    {/* Celebration icon */}
    <div className="text-6xl mb-6 select-none" role="img" aria-label="Selamat">🎉</div>

    <h1 className="text-2xl font-extrabold text-slate-800 mb-3">Selamat!</h1>
    <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xs mx-auto">
      Anda telah menyelesaikan seluruh Quiz Studi Hadis &amp; Ulumul Qur'an di Suqura.
    </p>

    {/* Badge */}
    <div className="inline-flex flex-col items-center bg-emerald-50 border border-emerald-200 rounded-2xl px-8 py-5 mb-8">
      <svg className="w-10 h-10 text-emerald-500 mb-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">Skor Total</p>
      <p className="text-3xl font-extrabold text-emerald-700">9 / 9</p>
      <p className="text-xs text-emerald-500 mt-1">Semua Level Lulus</p>
    </div>

    <button
      onClick={onHome}
      className="
        w-full py-3 rounded-xl text-sm font-semibold
        bg-emerald-500 text-white
        hover:bg-emerald-600 active:bg-emerald-700
        shadow-sm hover:shadow-md
        transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
      "
    >
      Kembali ke Beranda
    </button>
  </div>
);

// ── Level selection screen ─────────────────────────────────────────────────
const LevelSelectScreen = ({ totalLevels, getLevelStatus, onStartLevel }) => (
  <div className="w-full max-w-xl mx-auto">
    {/* Header */}
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Evaluasi Pembelajaran
      </div>
      <h1 className="text-2xl font-extrabold text-slate-800 mb-2">Quiz Suqura</h1>
      <p className="text-sm text-slate-500 max-w-xs mx-auto">
        Uji pemahamanmu tentang Ulumul Qur'an dan Ilmu Hadis. Selesaikan setiap level untuk membuka yang berikutnya.
      </p>
    </div>

    {/* Level cards */}
    <div className="space-y-4">
      {Array.from({ length: totalLevels }, (_, i) => i + 1).map((lvl) => {
        const { isUnlocked, isCompleted } = getLevelStatus(lvl);
        return (
          <LevelCard
            key={lvl}
            level={lvl}
            isUnlocked={isUnlocked}
            isCompleted={isCompleted}
            onStart={() => onStartLevel(lvl)}
          />
        );
      })}
    </div>
  </div>
);

// ── Main page component ────────────────────────────────────────────────────
function Quiz() {
  const quiz = useQuiz();

  // ── Phase: Final completion ──────────────────────────────────────────────
  if (quiz.phase === 'complete') {
    return (
      <PageShell>
        <CompletionScreen onHome={quiz.goToLevelSelect} />
      </PageShell>
    );
  }

  // ── Phase: Level result ──────────────────────────────────────────────────
  if (quiz.phase === 'result') {
    return (
      <PageShell>
        <div className="w-full max-w-xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
            <ResultCard
              level={quiz.currentLevel}
              score={quiz.score}
              total={quiz.questionsPerLevel}
              isPassed={quiz.isPassed}
              isLastLevel={quiz.isLastLevel}
              onNextLevel={quiz.goToNextLevel}
              onRetry={quiz.retryLevel}
              onHome={quiz.goToLevelSelect}
            />
          </div>
        </div>
      </PageShell>
    );
  }

  // ── Phase: Active question (question + feedback) ─────────────────────────
  if (quiz.phase === 'question' && quiz.activeQuestion) {
    return (
      <PageShell>
        <QuizCard
          level={quiz.currentLevel}
          currentQuestion={quiz.currentQuestion}
          totalQuestions={quiz.questionsPerLevel}
          phase={quiz.showFeedback ? 'feedback' : 'question'}
          onBack={quiz.goToLevelSelect}
        >
          <QuestionCard
            question={quiz.activeQuestion}
            questionNumber={quiz.currentQuestion + 1}
            totalQuestions={quiz.questionsPerLevel}
            selectedAnswer={quiz.selectedAnswer}
            showFeedback={quiz.showFeedback}
            onSelectAnswer={quiz.selectAnswer}
            onCheckAnswer={quiz.checkAnswer}
            onNextQuestion={quiz.nextQuestion}
            isLastQuestion={quiz.isLastQuestion}
          />
        </QuizCard>
      </PageShell>
    );
  }

  // ── Phase: Level select (default) ────────────────────────────────────────
  return (
    <PageShell>
      <LevelSelectScreen
        totalLevels={quiz.totalLevels}
        getLevelStatus={quiz.getLevelStatus}
        onStartLevel={quiz.startLevel}
      />
    </PageShell>
  );
}

// ── Shared page layout wrapper ─────────────────────────────────────────────
function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
     
      {/* Page content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {children}
      </main>
    </div>
  );
}

export default Quiz;
