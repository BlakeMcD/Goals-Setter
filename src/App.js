import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import TimeBlock from './components/TimeBlock';
import { addYear } from './actions/actionCreator';
import { v4 as uuidv4 } from 'uuid';

function App() {

  
  //DISPATCH
  const dispatch = useDispatch();

  //SELECTOR
  const yearBlocks = useSelector((state) => {
    const years = state.years;
    if (years === undefined) {
        return []
    }
    // console.log("yearsData:", years)
    return years
})

  //FUNCTIONS
  const addTimeBlock = () => {
    dispatch(addYear({
      uuid: uuidv4(),
      year: "Dispatch Title",
      categories: []
    }))
  }

  const displayTimeBlocks = () => {
    let allItems = [];
    for (let i = 0; i < yearBlocks.length; i++) {
      allItems.push(
        <TimeBlock key={i} yearUuid={yearBlocks[i].uuid}/>
      )
    }
    return allItems;
  }

  return (
    <div className="App">
      <div className="SidebarAndTimeContainer">
        <div className="SidebarContainer">
        </div>
        <div className="TimeContainer">
          {displayTimeBlocks()}
          <button onClick={() => addTimeBlock()}>Add TimeBlock</button>
        </div>
      </div>
    </div>
  );
}

export default App;
