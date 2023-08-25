var memoize = function(fn) {
    const cache = new Map(); // Create a cache to store computed values
    const callCount = new Map(); // Create a map to store call counts
    
    return function(...args) {
        const argsString = JSON.stringify(args); // Convert arguments to a string for hashing
        
        if (!cache.has(argsString)) {
            cache.set(argsString, fn(...args)); // Calculate and store the result in cache
            callCount.set(argsString, 1); // Set initial call count to 1
        } else {
            callCount.set(argsString, callCount.get(argsString) + 1); // Increment call count
        }
        
        return cache.get(argsString); // Return the cached result
    }
};