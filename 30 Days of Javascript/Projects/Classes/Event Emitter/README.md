## Event Emitter

### Question

Design an *EventEmitter* class. This interface is similar (but with some differences) to the one found in Node.js or the Event target subscribing to events and emitting them.

Your *EventEmitter* class should have the following two methods.

1.

**subscribe** - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.

An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in hich they were subscribed.

An array of results should be returned. You can assume no callbacks passed to *subscribe* are referentially identical. The *subscribe* method should also return an object with an *unsubscribe* method that enables the user to unsubscribe.

When it is called, the callback should be removed from the list of subscriptions and *undefined* whould be returned.

2. 

**emit** - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array.
Otherwise, return an array of the results of all callbacks calls in the order they were subscribed.

#### Implementation

To be Filled.