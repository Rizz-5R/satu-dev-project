/**
 * OptionButton.jsx
 * A single answer option in the quiz.
 * Handles four visual states: idle, selected, correct, incorrect.
 */

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

const getOptionStyle = ({ isSelected, isCorrect, isWrong, showFeedback, disabled }) => {
  if (!showFeedback) {
    // Pre-feedback states
    if (isSelected) {
      return {
        wrapper: 'border-emerald-500 bg-emerald-50 shadow-md shadow-emerald-100',
        label:   'bg-emerald-500 text-white',
        text:    'text-emerald-900 font-medium',
      };
    }
    return {
      wrapper: `border-slate-200 bg-white ${!disabled ? 'hover:border-emerald-300 hover:bg-emerald-50/50 hover:shadow-sm cursor-pointer' : 'opacity-50 cursor-not-allowed'}`,
      label:   'bg-slate-100 text-slate-500',
      text:    'text-slate-700',
    };
  }

  // Post-feedback states
  if (isCorrect) {
    return {
      wrapper: 'border-emerald-500 bg-emerald-50',
      label:   'bg-emerald-500 text-white',
      text:    'text-emerald-900 font-semibold',
    };
  }
  if (isWrong) {
    return {
      wrapper: 'border-red-400 bg-red-50',
      label:   'bg-red-400 text-white',
      text:    'text-red-800',
    };
  }
  // Other unselected options after feedback — muted
  return {
    wrapper: 'border-slate-100 bg-slate-50/50 opacity-50',
    label:   'bg-slate-100 text-slate-400',
    text:    'text-slate-400',
  };
};

export default function OptionButton({
  index,
  text,
  isSelected,
  isCorrect,   // true = this option IS the correct answer
  isWrong,     // true = this is what user chose AND it's wrong
  showFeedback,
  disabled,
  onClick,
}) {
  const styles = getOptionStyle({ isSelected, isCorrect, isWrong, showFeedback, disabled });

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      aria-pressed={isSelected}
      className={`
        w-full flex items-center gap-3 p-4 rounded-xl
        border-2 transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2
        text-left
        ${styles.wrapper}
      `}
    >
      {/* Option label: A / B / C / D */}
      <span className={`
        flex-shrink-0 w-8 h-8 rounded-lg
        flex items-center justify-center
        text-xs font-bold font-mono
        transition-colors duration-200
        ${styles.label}
      `}>
        {OPTION_LABELS[index]}
      </span>

      {/* Option text */}
      <span className={`text-sm leading-snug transition-colors duration-200 ${styles.text}`}>
        {text}
      </span>

      {/* Feedback icon at the end */}
      {showFeedback && (isCorrect || isWrong) && (
        <span className="ml-auto flex-shrink-0">
          {isCorrect && (
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
          {isWrong && (
            <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          )}
        </span>
      )}
    </button>
  );
}
