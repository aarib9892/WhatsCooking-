import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import  "./Home.css"

function Home() {

    const [homeData, setHomeData] = useState(null);
    // const [area, setArea] = useState("Indian");
    
    
  useEffect(() => {
        
    fetch(
        'https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian'
      )
        .then(response => response.json())
        .then(data => 
          setHomeData(data.meals))
        
        }, []);
   
  return (
    <>
    <h1 className='main-head'>Recipes of the day!!</h1>
      <div className='container'>
      
      <>
     
          {homeData && homeData.map((item,key)=>
          <div className='rec-card'>
          <Link to={`/${item.strMeal}`} className='card'  key={key} >
               <div className='content' key={key}>
               <img src={item.strMealThumb} alt=""   />
               
             
                
                </div>
                
                </Link>
                <h5 className='font-style'>{item.strMeal}</h5>
               
                </div>
                 
                
                
                )}
                </>
      </div>
      </>
    

  )
}

export default Home