## Is Object Empty

### Question

Given an object or an array, return if it is empty.

- An empty object conatains no key-value pairs.

- An empty array conatins no elements.

You may assume the object or array is the output of *JSON.parse*.

#### Implementation

*isEmptyObject(obj)* :

*Object.key(obj)* : returns an array of all keys in the object *obj*.

*Object.keys(obj).length* : gives the number of keys in the object, which effectively tells us the number of key-value pairs.

Checks if this length is equal to 0. If it is, the object is empty, and it return *true*. Otherwise, it return *false*.

*isEmptyArray(arr)* : 

*arr.length* : directly gives the number of elements in the array.

Checks if this length is equal to 0. If it is, the array is empty, and it return *true*. Otherwise, it return *false*.