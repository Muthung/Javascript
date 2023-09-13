function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;
    let rejected = false;

    // Helper function to check if all promises are resolved
    function checkAllResolved() {
      if (resolvedCount === functions.length) {
        resolve(results);
      }
    }

    // Iterate through the functions and execute them
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((result) => {
          if (!rejected) {
            results[i] = result;
            resolvedCount++;
            checkAllResolved();
          }
        })
        .catch((error) => {
          if (!rejected) {
            reject(error);
            rejected = true;
          }
        });
    }
  });
}