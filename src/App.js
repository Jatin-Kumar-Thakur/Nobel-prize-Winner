
import './App.css';
import { useEffect, useState } from 'react'
import Apidata from './Components/ApiData/Apidata';
import Filter from './Components/Filter/Filter';
import TopWinner from './Components/TopWinner/TopWinner';

function App() {
  const [value, setValue] = useState([]);
  const [filterCategory, setCategoryFilterValue] = useState("null");
  const [filterDate, setfilterDate] = useState("null");


  // ************************************************************************************

  const api = "https://api.nobelprize.org/v1/prize.json";
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data.prizes[0].year);
      setValue(data.prizes);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApiData(api);
  }, []);

  // ***********************************************************************************8


  // ************************ FILTER ***************************************
  let newvalue = value.filter((categ) => {

    if (filterCategory === "chemistry") {
      return categ.category === filterCategory;
    }
    else if (filterCategory === "peace") {
      return categ.category === filterCategory;
    }
    else if (filterCategory === "literature") {
      return categ.category === filterCategory;
    }
    else if (filterCategory === "economics") {
      return categ.category === filterCategory;
    }
    else if (filterCategory === "physics") {
      return categ.category === filterCategory;
    }
    else if (filterCategory === "medicine") {
      return categ.category === filterCategory;
    }
    else {
      return categ.category;
    }

  })

  if(filterDate !== 'null'){
      newvalue=newvalue.filter((from)=>{
        return from.year===filterDate;
      })
  }


function onfiltervalueSelected(filtervalue) {
  setCategoryFilterValue(filtervalue);
}
function onDateChange(filterDate) {
  setfilterDate(filterDate);
}
// **************************************** Filter End ******************************

return (
  <div className="App">
    <h1 className='title'>Nobel Price Wineers</h1>
    <TopWinner data={value}/>
    <Filter catvalue={value} filtervalueselected={onfiltervalueSelected} filtervalueselectedDate={onDateChange} />
    <div className="person-cards">
      <Apidata value={newvalue} />
    </div>
  </div>
);
}

export default App;
