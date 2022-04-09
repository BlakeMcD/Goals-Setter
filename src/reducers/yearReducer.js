const yearReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_YEAR':
            return [...state, action.item];

        case 'ADD_YEAR_CATEGORY': 
            return state.map(obj => {
                if (obj.uuid  === action.item.yearUuid) {  //find the right year

                    if (obj.categories.length === 0) {  //there are no categories this array
                        return {
                            uuid: obj.uuid, 
                            year: obj.year,
                            categories: [
                                {
                                    yearUuid: action.item.yearUuid,
                                    uuid: action.item.uuid, 
                                    category: action.item.category, 
                                    items: []
                                }
                            ]
                        }
                    }

                    //case - there are already categories in this array
                    return {
                        uuid: obj.uuid, 
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
        
        case 'ADD_YEAR_CATEGORY_ITEM': 
        console.log("AddYearCategoryItem Action:", action.item)
        return state.map(obj => {
            if (obj.uuid === action.item.yearUuid) {  //find the right year
                console.log("line 31 ran")
                return {
                    uuid: obj.uuid, 
                    year: obj.year, 
                    categories: obj.categories.map((cat) => {  //find the right category
                        console.log("cat.uuid:", cat.uuid);
                        console.log("action.item.categoryUuid:", action.item.categoryUuid);
                        if (cat.uuid === action.item.categoryUuid) {
                            console.log("line 39 ran")
                            return {
                                yearUuid: cat.yearUuid, 
                                uuid: cat.uuid, 
                                category: cat.category,
                                items: [...cat.items, {text: "did this work?", uuid: action.item.uuid}]
                            }
                        }
                        console.log("line 47 ran")
                        return cat
                    })
                }
            }
            return obj;
        })

        default: 
        return state;
    }
};

export default yearReducer;