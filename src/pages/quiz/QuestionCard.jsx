/**
 * QuestionCard.jsx
 * Renders the active question, all answer options, feedback banner,
 * and the primary action buttons ("Cek Jawaban" / "Soal Berikutnya").
 */

import OptionButton from './OptionButton';

const FeedbackBanner = ({ isCorrect, correctOptionText, explanation }) => (
  <div className={`
    rounded-xl p-4 mt-4
    border-l-4
    ${isCorrect
      ? 'bg-emerald-50 border-emerald-500'
      : 'bg-red-50 border-red-400'
    }
  `}>
    {/* Status header */}
    <div className="flex items-center gap-2 mb-2">
      {isCorrect ? (
        <>
          <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold text-emerald-700">Jawaban Benar!</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold text-red-600">Jawaban Salah</span>
        </>
      )}
    </div>

    {/* Show correct answer only on wrong */}
    {!isCorrect && (
      <p className="text-sm text-red-700 mb-2">
        Jawaban yang benar adalah:{' '}
        <span className="font-semibold">"{correctOptionText}"</span>
      </p>
    )}

    {/* Explanation */}
    {explanation && (
      <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-2 mt-2">
        {explanation}
      </p>
    )}
  </div>
);

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  showFeedback,
  onSelectAnswer,
  onCheckAnswer,
  onNextQuestion,
  isLastQuestion,
}) {
  const correctAnswer = question.answer;
  const correctOptionText = question.options[correctAnswer];
  const userIsCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="w-full">
      {/* Question number + text */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">
          Soal {questionNumber} dari {totalQuestions}
        </p>
        <h2 className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-5">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = showFeedback && index === correctAnswer;
          const isWrongOption   = showFeedback && isSelected && !userIsCorrect;

          return (
            <OptionButton
              key={index}
              index={index}
              text={option}
              isSelected={isSelected}
              isCorrect={isCorrectOption}
              isWrong={isWrongOption}
              showFeedback={showFeedback}
              disabled={showFeedback}
              onClick={() => onSelectAnswer(index)}
            />
          );
        })}
      </div>

      {/* Feedback panel */}
      {showFeedback && (
        <FeedbackBanner
          isCorrect={userIsCorrect}
          correctOptionText={correctOptionText}
          explanation={question.explanation}
        />
      )}

      {/* Action buttons */}
      <div className="mt-5 flex justify-end">
        {!showFeedback ? (
          <button
            onClick={onCheckAnswer}
            disabled={selectedAnswer === null}
            className={`
              px-6 py-2.5 rounded-xl text-sm font-semibold
              transition-all duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
              ${selectedAnswer !== null
                ? 'bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700 shadow-sm hover:shadow-md'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }
            `}
          >
            Cek Jawaban
          </button>
        ) : (
          <button
            onClick={onNextQuestion}
            className="
              px-6 py-2.5 rounded-xl text-sm font-semibold
              bg-emerald-500 text-white
              hover:bg-emerald-600 active:bg-emerald-700
              shadow-sm hover:shadow-md
              transition-all duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
              flex items-center gap-2
            "
          >
            {isLastQuestion ? 'Lihat Hasil' : 'Soal Berikutnya'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
