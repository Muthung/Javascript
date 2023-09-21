## Join Two Arrays by ID.

### Question

Given two arrays *arr1* and *arr2*, return a new array *joinedArray*. All the objects in each of the two inputs array will contain an *id* field that has an integer value. *joinedArray* is an array formed by merging *arr1* and *arr2* based on thier *id* key. The length of *joinedArray* should be the length of unique values of *id*. The returned array should be sorted in **ascending** order based on the *id* key.

If a given *id* exists in one array but not the other, the single object with that *id* should be included in the resut array without modification.

If tw objects share an *id*, their properties should be merged into a sinlge object:

> If a key oly exists in one object, that single key-value pair should be included in the object.

> If a ke yis included in both objects, the value in the object from *arr2* should override the value from *arr1*.

#### Implementation