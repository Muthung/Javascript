## Cache With Time Limit.

### Question

Write a class that allows getting and setting key-value pairs, however a **time until expiration** is associated with each day.

The class has three public methods:

*set(key, value, duration)*: accepts an integer *key*, an integer *value*, and a *duration* in milliseconds. Once the *duration* has elapsed, the key should be in accessible. The method should return *true* if the same un-expired key already exists and *false* otherwise. Both the value and duration should be overwritten if the key already exists.

*get(key)*: if an un-eexpired key exists, it should return the associated value. Otherwise it should return *-1*.

*count()*: returns the count of un-expired keys.

#### IMplementation

