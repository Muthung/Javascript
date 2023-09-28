## Compact Object

### Question

Given an object or arr *obj*, return a **compact object**. A compact object is the same as the original object, except with keys containing falsy values removed.

This operation applie to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when *Boolean(value)* returns *false*.

You may assume the *obj* is the output of *JSON.parse*. In other words, it is valid JSON.

#### Implementation

*compactObject* function recursively traverses a JSON object and removes keys with falsy values, efficiently handling arrays, objects, and other data types.

It returns a compacted object where falsy values are removed, making use of the *map*, *filter*, and *JSON.stringfy* functions to achieve the desired result.