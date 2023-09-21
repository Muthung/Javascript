## Join Two Arrays by ID.

### Question

Given two arrays *arr1* and *arr2*, return a new array *joinedArray*. All the objects in each of the two inputs array will contain an *id* field that has an integer value. *joinedArray* is an array formed by merging *arr1* and *arr2* based on thier *id* key. The length of *joinedArray* should be the length of unique values of *id*. The returned array should be sorted in **ascending** order based on the *id* key.

If a given *id* exists in one array but not the other, the single object with that *id* should be included in the resut array without modification.

If tw objects share an *id*, their properties should be merged into a sinlge object:

> If a key oly exists in one object, that single key-value pair should be included in the object.

> If a ke yis included in both objects, the value in the object from *arr2* should override the value from *arr1*.

#### Implementation

Initializes an empty dictionary called *idToObject* to store merged objects, where *id* field serves as the key.

Then, it iterates through each object i *arr1* and *arr2*, checking if an object with the same *id* already exists in *idToObject*. If an object exists, it merges the properties of the current object into the existing one, and if not, it adds the object to *idToObject*.

Ater merging all objects from both arrays, it converts the values of *idToObject* (merged objects) into an array using *Object.values()*. This step ensures that the final result is an array of merged objects.

It sorts *joinedArray* in ascending order based on the *id* field using the *sort()* method, ensuring that the result is sorted by *id*. The sorted array is then returned as the output.