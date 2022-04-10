import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addYearCategory } from '../actions/actionCreator';
import CategoryCard from './CategoryCard';

function TimeBlock(props) {

  console.log("TimeBlock Props:", props)

  //DISPATCH
  const dispatch = useDispatch();

  //SELECTOR
  const yearBlockCategories = useSelector((state) => {
    if (state.years !== undefined) {
      const year = state.years.find((year) => year.uuid === props.yearUuid)
      if (year !== undefined) {
        return year.categories;
      }
      return [];
    }
    return [];
  })

  //FUNCTIONS
  const displayTimeCategories = () => {
    let allItems = [];
    if (yearBlockCategories.length !== 0) {
      for (let i = 0; i < yearBlockCategories.length; i++) {
        allItems.push(
          <CategoryCard key={i} uuid={yearBlockCategories[i].uuid} yearUuid={yearBlockCategories[i].yearUuid} category={yearBlockCategories[i].category} />
        )
      }
    };
    return allItems
  };

  const addCategoryCard = () => {
    console.log("addCategoryCard dispath code block")
    dispatch(addYearCategory({
      yearUuid: props.yearUuid,
      uuid: uuidv4(),
      category: "test"
    }))
  }

  return (
    <div className="TimeBlock">
        <h1>Time Block</h1>
        <p>And my uuid is: {props.yearUuid}</p>
        {displayTimeCategories()}
        <button onClick={() => addCategoryCard()}>Add Category Card</button>
    </div> 
  )
}

export default TimeBlock