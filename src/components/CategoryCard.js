import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addYearCategoryItem } from '../actions/actionCreator';

function CategoryCard(props) {

    //DISPATCH
  const dispatch = useDispatch();

    //SELECTOR
    const CategoryItems = useSelector((state) => {
        const findYear = state.years.find((year) => year.uuid === props.yearUuid);
        console.log("FINDYEAR:", findYear)
        if (findYear) {
            const findCategory = findYear.categories.find((category) => category.uuid = props.uuid);
            if (findCategory) {
                return findCategory;
            }
        }
        return [];
    });

    //FUNCTIONS
    const addCategoryItem = () => {
        console.log("add Category Item click registered")
        // console.log("addCategoryCard dispath code block")
        dispatch(addYearCategoryItem({
            yearUuid: props.yearUuid,
            categoryUuid: props.uuid,
            uuid: uuidv4()
        }))
    }

  return (
    <div className="CategoryCard">
        <p>This is a category card</p>
        <p>yearUuid: {props.yearUuid}</p>
        <p>selfUuid: {props.uuid}</p>
        <h3>ITEMS</h3>
        {/* <button onClick={() => addCategoryItem()}>Add Category Item</button> */}
    </div>
  )
}

export default CategoryCard