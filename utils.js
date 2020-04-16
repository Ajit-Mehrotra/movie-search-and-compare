//for delaying search input. This way we don't request unecessarily.

const debounce = (callback, delay = 1000) => {
  let timeoutId;

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  };
};
