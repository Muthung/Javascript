## Cache With Time Limit.

### Question

Write a class that allows getting and setting key-value pairs, however a **time until expiration** is associated with each day.

The class has three public methods:

*set(key, value, duration)*: accepts an integer *key*, an integer *value*, and a *duration* in milliseconds. Once the *duration* has elapsed, the key should be in accessible. The method should return *true* if the same un-expired key already exists and *false* otherwise. Both the value and duration should be overwritten if the key already exists.

*get(key)*: if an un-eexpired key exists, it should return the associated value. Otherwise it should return *-1*.

*count()*: returns the count of un-expired keys.

#### Implementation

The *TimeLimitCache* constructor initializes an empty cache object using *this.cache*.

The *set* method accepts *key*, *value*, and *duration*. It calculates the current timestamp and the expiration timestamp for the key. Then, it checks if the key already exists and hasn't expired. If so, it updates the existing key's valu and expiration time. Otherwise, it adds a new entry for the key with its value and expiration time. The method returns *true* if an existing unexpired key is updated, and *false* if a new key is added.

The *get* method accepts a *key* and checks if it existsa and hasn't expired in the cache. If the key exists and is not expired, it returns the associated value; otherwise, it returns *-1*.

The *count* method counts the number of unexpired keys in the cache. It iterates through the cache objects, checking each key's expiration time. If a key has expired, it removes it from the cache using *delete*. This method returns the count of unexpired keys.