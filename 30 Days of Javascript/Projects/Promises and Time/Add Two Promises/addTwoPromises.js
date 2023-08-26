var addTwoPromises = async function(promise1, promise2) {
    // Use Promise.all to wait for both promises to resolve
    const [result1, result2] = await Promise.all([promise1, promise2]);
    
    // Calculate the sum of the resolved values
    const sum = result1 + result2;
    
    // Return a new promise that resolves with the sum
    return Promise.resolve(sum);
};