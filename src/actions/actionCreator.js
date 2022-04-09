//YEAR

export const addYear = (payload) => {
    return {
        type: "ADD_YEAR", 
        item: payload
    };
};

export const addYearCategory = (payload) => {
    return {
        type: "ADD_YEAR_CATEGORY", 
        item: payload
    };
};