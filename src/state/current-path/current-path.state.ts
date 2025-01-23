import van from 'vanjs-core';

const { state } = van;

export const currentPath = state(window.location.pathname);

// Watch for browser back/forward navigation
window.addEventListener('popstate', () => {
  currentPath.val = window.location.pathname;
});

// Watch for programmatic navigation
const originalPushState = history.pushState;
const originalReplaceState = history.replaceState;

history.pushState = (...args) => {
  originalPushState.apply(this, args);
  currentPath.val = window.location.pathname;
};

history.replaceState = (...args) => {
  originalReplaceState.apply(this, args);
  currentPath.val = window.location.pathname;
};