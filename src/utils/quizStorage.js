/**
 * quizStorage.js
 * Abstraction layer for quiz progress persistence via localStorage.
 * Swap this file's internals when migrating to a backend API.
 */

const STORAGE_KEY = 'quiz-progress';

/**
 * Default progress state — only Level 1 unlocked on first visit.
 * @returns {Object}
 */
const defaultProgress = () => ({
  level1: false, // completed
  level2: false,
  level3: false,
  unlocked: {
    level1: true,  // always unlocked
    level2: false,
    level3: false,
  },
});

/**
 * Load progress from localStorage.
 * Returns default state if nothing is stored or data is malformed.
 * @returns {Object} progress
 */
export const loadProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();

    const parsed = JSON.parse(raw);

    // Validate shape — guard against stale or corrupted data
    if (
      typeof parsed !== 'object' ||
      !parsed.unlocked ||
      typeof parsed.unlocked.level1 === 'undefined'
    ) {
      return defaultProgress();
    }

    return parsed;
  } catch {
    return defaultProgress();
  }
};

/**
 * Persist progress to localStorage.
 * @param {Object} progress
 */
export const saveProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Silent fail — storage quota exceeded or private browsing
    console.warn('[quizStorage] Could not save quiz progress to localStorage.');
  }
};

/**
 * Mark a level as completed and unlock the next one.
 * @param {number} completedLevel - 1, 2, or 3
 * @param {boolean} passed - true if user scored 3/3
 * @returns {Object} updated progress
 */
export const completeLevel = (completedLevel, passed) => {
  const progress = loadProgress();
  const levelKey = `level${completedLevel}`;
  const nextLevelKey = `level${completedLevel + 1}`;

  progress[levelKey] = true;

  if (passed && completedLevel < 3 && nextLevelKey in progress.unlocked) {
    progress.unlocked[nextLevelKey] = true;
  }

  saveProgress(progress);
  return progress;
};

/**
 * Reset all progress back to the default state.
 * Useful for development and "Start Over" features.
 */
export const resetProgress = () => {
  const fresh = defaultProgress();
  saveProgress(fresh);
  return fresh;
};

/**
 * Check if a given level is unlocked.
 * @param {number} level - 1, 2, or 3
 * @returns {boolean}
 */
export const isLevelUnlocked = (level) => {
  const progress = loadProgress();
  return progress.unlocked[`level${level}`] === true;
};

/**
 * Check if a given level has been completed.
 * @param {number} level - 1, 2, or 3
 * @returns {boolean}
 */
export const isLevelCompleted = (level) => {
  const progress = loadProgress();
  return progress[`level${level}`] === true;
};
