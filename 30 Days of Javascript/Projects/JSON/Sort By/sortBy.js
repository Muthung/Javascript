var sortBy = function(arr, fn) {
    arr.sort((a, b) => {
        const aValue = fn(a);
        const bValue = fn(b);

        if (aValue < bValue) {
            return -1;
        } else if (aValue > bValue) {
            return 1;
        } else {
            return 0;
        }
    });

    return arr;
};