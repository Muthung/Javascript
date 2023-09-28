var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj.map(compactObject).filter(Boolean);
    } else if (typeof obj === 'object' && obj !== null) {
        
        const result = {};
        
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {

                const compactedValue = compactObject(obj[key]);
                if (compactedValue !== undefined && compactedValue !== null) {
                    result[key] =compactedValue;
                }
            }
        }

        return Object.keys(result).length === 0 ? {} : result;
    } else {
        return obj || undefined;
    }
};