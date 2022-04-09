import React from 'react'

function CategoryCard(props) {
  return (
    <div className="CategoryCard">
        <p>This is a category card</p>
        <p>yearUuid: {props.yearUuid}</p>
        <p>selfUuid: {props.uuid}</p>
    </div>
  )
}

export default CategoryCard