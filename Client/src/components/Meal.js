
import './meal.css'

const Meal=props=>{
 const recipe=props.mealData
 console.log(recipe.strMealThumb)
 const ingi=props.ingi
//  const ing=recipe[`strIngredient${10}`]
const array=[{
  key:"1",
  recipe:""
}]
 for (let i=1; i<21 ;i++){
   if (recipe[`strIngredient${i}`]){
     array.push({
       key:Math.random(),
       recipe:recipe[`strIngredient${i}`],
      })
     }
   }

   


   
   
 
 
 
 return (
  <div className='main-container' >
  
  <div className='contents'>
    <h2>{recipe.strMeal}</h2>
    <div className="icon">
    <img className='meal-icon' src={recipe.strMealThumb} alt="" />
    {ingi=="yes"?<div className="ingredi">{recipe.strIngredients}</div>:<div className="ingredients">
    {array.map(item=>(
        <p key={item.key}>{">"+item.recipe}</p>
      ))}
      </div>}
    </div>
    <div className="info">
    <h1>Instructions:</h1>
    <p className='instruct'>
    
      {recipe.strInstructions}
    </p>
    {/* <a href="#">Card Link</a>
    <a href="#">Another Link</a> */}
    </div>
    </div>
 
  
  
</div>




  
 )
}
export default Meal;



// {/* <div>
//      <h1>{recipe.strMeal}</h1>
//      <img className={classes.img} src={recipe.strMealThumb} alt="Biryani.jpg" />
//      {array.map(item=>(
//        <p key={item.key}>{item.recipe}</p>
//      ))}
//      <h1>Instructions :-{recipe.strInstructions}</h1>
      
//     </div> */}