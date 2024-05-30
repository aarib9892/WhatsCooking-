
import { useParams } from 'react-router-dom';
import Meal from './Meal';

import { useState, useEffect } from 'react';


const SearchMeal = () => {
  const params = useParams()

  const [mealData, setmealData] = useState(null);
  const [flag, setFlag] = useState("hai");
  const [ingi, setIngi] = useState();


  useEffect(() => {
    if (flag=="hai"){
      fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=' + params.recipe
      )
        .then((response) => response.json())
        .then((data) => {
          setmealData(data.meals[0])
          setFlag("hai")
          setIngi("no")
  
        })
        .catch(() => {
          setFlag("nope")
          
          console.log("error");
          
        })

    }
   
  }, [params.recipe])


  useEffect(() => {
    if(flag=="nope"){
      fetch(
        `http://localhost:3001/getData/`+params.recipe
      )
        .then((response) => response.json())
        .then((data) => {
          setmealData(data[0])
          console.log(data[0])
          setIngi("yes")
          setFlag("hai")

        })
        .catch(() => {
          console.log("error");
          const post="want to post";
          console.log(post)
        })



    }
    
  }, [flag]);





  
    
  











  //  const getData=()=>{
  //   fetch(
  //     'https://www.themealdb.com/api/json/v1/1/search.php?s='+recData
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setmealData(data.meals[0])
  //     })
  //     .catch(() => {
  //       console.log("error");
  //     });

  // }





  return (
    <>
      {/* <button onClick={getData}>click</button> */}
      {mealData && <Meal mealData={mealData} ingi={ingi} />}
    </>


  )

}
export default SearchMeal