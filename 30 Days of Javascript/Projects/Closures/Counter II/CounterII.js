function createCounter (init) {

    currentValue = init;

    function increment () {
        currentValue++;

        return currentValue;
    }

    function decrement () {
        currentValue--;

        return currentValue;
    }

    function reset () {
        currentValue = init;

        return currentValue;
    } 

    return {
        increment,
        decrement,
        reset
    };

}