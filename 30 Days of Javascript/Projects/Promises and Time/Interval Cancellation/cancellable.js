function cancellable(fn, args, t) {
  let currentTime = 0;
  let intervalId;

  function cancelFn(cancelT) {
    clearInterval(intervalId);
    console.log(`Cancelled at ${cancelT}ms`);
  }

  function executeFn() {
    const returnedValue = fn(...args);
    console.log(`[${currentTime}] returned: ${returnedValue}`);
  }

  intervalId = setInterval(() => {
    executeFn();
    currentTime += t;
  }, t);

  executeFn(); // Call immediately

  return cancelFn;
}
