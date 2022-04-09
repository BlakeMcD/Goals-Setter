import React from 'react';
import CategoryCard from './CategoryCard';

function TimeBlock(props) {

  return (
    <div className="TimeBlock">
        <h1>Time Block</h1>
        <p>And my uuid is: {props.uuid}</p>
        <CategoryCard/>
        <button>Add Category</button>
    </div>
  )
}

export default TimeBlock