const yearReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_YEAR':
            return [...state, action.item];

        case 'ADD_YEAR_CATEGORY':
            console.log("1 DISPATCH RECEIVED")
            console.log("2 yearUuid:", action.item.yearUuid)
            console.log("3 uuid:", action.item.uuid)
            console.log("4 category:", action.item.category)
            return state.map(obj => {
                console.log("5 the object that is mapped:", obj)
                console.log("6 ...obj.categories:", [...obj.categories])
                if (obj.uuid === action.item.yearUuid) {  //find the right year

                    return {
                        ...obj,
                        categories: [
                            ...obj.categories, 
                            action.item
                        ]
                    };
                }
                return obj;
            })
        
        case 'ADD_YEAR_CATEGORY_ITEM': 
        return state.map(obj => {
            // if (obj.uuid === action.item.yearUuid) {  //find the right year
            //     return {
            //         uuid: obj.uuid, 
            //         year: obj.year, 
            //         categories: obj.categories.map((cat) => {  //find the right category
            //             if (cat.uuid === action.item.categoryUuid) {
            //                 return {
            //                     yearUuid: cat.yearUuid, 
            //                     uuid: cat.uuid, 
            //                     category: cat.category,
            //                     items: [...cat.items, {text: "did this work?", uuid: action.item.uuid}]
            //                 }
            //             }
            //             return cat
            //         })
            //     }
            // }
            return obj;
        })

        default: 
        return state;
    }
};

export default yearReducer;