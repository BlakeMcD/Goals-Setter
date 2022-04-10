import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addYearCategory } from '../actions/actionCreator';
import CategoryCard from './CategoryCard';

function TimeBlock(props) {

  //STATE
  const [counter, setCounter] = useState(0)

  //USE EFFECT
  useEffect(() => {    // Update the document title using the browser API    
    console.log("TimeBlock Mounted")  
  });

  //DISPATCH
  const dispatch = useDispatch();

  //SELECTOR
  const yearBlock = useSelector((state) => {
    if (state.years !== undefined) {
      const year = state.years.find((year) => year.uuid === props.yearUuid)
      if (year !== undefined) {
        return year;
      }
      return [];
    } 
    return [];
  })

  //FUNCTIONS
  const displayCategoryCards = () => {
    let allItems = [];
    if (yearBlock.categories.length !== 0) {
      for (let i = 0; i < yearBlock.categories.length; i++) {
        allItems.push(
          <CategoryCard key={i} uuid={yearBlock.categories[i].uuid} yearUuid={yearBlock.uuid} category={yearBlock.categories[i].category} />
        )
      }
    };
    return allItems
  };

  const addCategoryCard = () => {
    console.log("addCategoryCard function it TimeBlock ran")
    dispatch(addYearCategory({
      yearUuid: props.yearUuid,
      uuid: uuidv4(),
      // uuid: counter,
      category: `${counter}`,
      items: []
    }))
  }

  return (
    <div className="TimeBlock">
        <h1>Time Block</h1>
        <p>And my uuid is: {props.yearUuid}</p>
        {displayCategoryCards()}
        <button onClick={() => addCategoryCard()}>Add Category Card</button>
    </div> 
  )
}

export default TimeBlock