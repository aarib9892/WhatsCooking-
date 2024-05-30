import React , {useState , useEffect} from 'react';
import { useParams } from 'react-router';
import "./Scandata.css"


const Scandata=props=>{

    const params=useParams()
    const barcode=params.productbarcode
    const [macros, setmacros] = useState('')

    useEffect(() => {
        fetch(
            `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        )
          .then((response) => response.json())
          .then((data) => {
            setmacros(data.product.nutriments)
            console.log(macros.carbohydrates)
            
      
          
          })
          .catch(() => {
            console.log("error");
          })},[barcode])


   
   
  
    return (
        <div className='main-c'>
       
        <div className="cont">
        <h1>Nutritional info:</h1>
         
        <h2>Carbs:  {macros.carbohydrates}g</h2>
        <h2>Proteins:  {macros.proteins}g</h2>
        <h2>Fats: {macros.fat}g</h2>
        </div>
     
        </div>

    )

}
export default Scandata;