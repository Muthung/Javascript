var TimeLimitCche = function() {
    this.cache = {};
};

TimeLimitCche.prototype.set = function(key, value, duration) {
    const currentTime = Date.now();
    const expirationTIme = currentTime + duration;

    if (this.cache[key] && this.cache[key].expirationTIme > currentTime) {
        this.cache[key].value = value;
        this.cache[key].expirationTIme = expirationTIme;

        return true;
    }

    this.cache[key] = { value, expirationTIme };
    return false;
};

TimeLimitCche.prototype.get = function(key) {
    const currentTime = Date.now();
    if (this.cache[key] && this.cache[key], expirationTIme > currentTime) {
        return this.cache[key].value;
    } else{
        delete this.cache[key];
        return -1;
    }
};

TimeLimitCche.prototype.count = function() {
    const currentTime =  Date.now();
    let count = 0;

    for (const key in this.cache) {
        if (this.cache[key].expirationTIme > currentTime) {
            count++;
        } else {
            delete this.cache[key];
        }
    }

    return count;
};