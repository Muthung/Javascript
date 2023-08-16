function expect(val) {
    return {
        toBe: function(compareVal) {
            if (val === compareVal) {
                return {"value": true};
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(compareVal) {
            if (val !== compareVal) {
                return {"value": true};
            } else {
                throw new Error("Equal");
            }
        }
    };
}