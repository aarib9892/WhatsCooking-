import Meal from './components/Meal'
import {useState , useEffect } from 'react'
import Card from './components/UI/Card';
import Barcode from './components/Barcode';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/App.css'

import Button from 'react-bootstrap/Button';
import Navbar from './components/Navbar';


function App() {
 
    
  
  const [mealData, setmealData] = useState(null);
  const [recData, setrecData] = useState(null);
  const [barcode, setbarcode] = useState(false);
  // const [scanData, setscanData] = useState(null);
  // const [recCard, setrecCard] = useState(null);
  // const url= "https://www.themealdb.com/api/json/v1/1/search.php?s="+props.name+""

  useEffect(() => {
    fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    )
      .then((response) => response.json())
      .then((data) => {
        setmealData(data.meals[0])
      
      })
      .catch(() => {
        console.log("error");
      })},[])




  const mealHandler = event=>{
    setrecData(event.target.value)

  }
  const barcodeHandler=()=>{
    setbarcode(!barcode)
  }
  // const scanDataHandler=()=>{
  //   setscanData(data)
  // }
  
  
    const getMealData = ()=>{
      fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s='+recData
      )
        .then((response) => response.json())
        .then((data) => {
          setmealData(data.meals[0])
        })
        .catch(() => {
          console.log("error");
        })};
    
        
  return (
    <div>
    <Navbar />
  
    
      <input placeholder="Search your Craving..." className="searchbar" type="text" onChange={mealHandler} />
      <Button autoFocus className="btn" type="submit" onClick={getMealData}>Get Recipe</Button>
      <Button className= "btn" variant="success" onClick={barcodeHandler}>Scan Product</Button>
      {barcode && <Barcode onClick={barcodeHandler}  />}
      
    <Card>
      {mealData && <Meal mealData={mealData}/>}
    </Card>
 
    
     
    </div>
  );
}

export default App;
