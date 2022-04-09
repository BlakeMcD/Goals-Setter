const yearReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_YEAR':
            return [...state, action.item];

        case 'ADD_YEAR_CATEGORY': 

            return state.map(obj => {
                if (obj.uuid  === action.item.yearUuid) {  //find the right year
                    return {
                        uuid: obj.uuid, 
                        yearUuid: action.item.yearUuid,
                        year: obj.year,
                        categories: [
                            ...obj.categories, 
                            {
                                yearUuid: action.item.yearUuid,
                                uuid: action.item.uuid, 
                                category: action.item.category, 
                                items: []
                            }
                        ]
                    }
                }
                return obj;
            })

        default: 
        return state;
    }
};

export default yearReducer;