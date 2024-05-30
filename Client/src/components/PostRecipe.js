import React, { useState,useEffect } from 'react';
import "./PostRecipe.css"
import axios from 'axios';


function PostRecipe() {


    const [recipeName, setRecipeName] = useState()
    const [image, setImage] = useState()
    const [ingredients, setIngredients] = useState()
    const [procedure, setProcedure] = useState()
    const [id, setId] = useState();

    const formData = new FormData();
formData.append('file', image);

    

    useEffect(() => {

        axios.get("http://localhost:3001/api/newId").then(response => { setId(response.data[0].id + 1) })


    })
    const imageHandler=(files)=>{
        setImage(files[0])
        const formData = new FormData();
        formData.append('file', image);
    }
   

    



    const submitHandler = () => {

        axios.post("http://localhost:3001/post-recipe",
            new URLSearchParams({
                id:id,
                name: recipeName, //gave the values directly for testing
                image: formData,
                ingredients: ingredients,
                procedure: procedure,
            }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(function (response) {
            console.log(response);
        });


    }


    return (
        <div className="parent">
            <div className='content-container'>

                <form action="#">
                <h1>Upload Recipe</h1>

                
                <div className='input-box'>
                        <span className='details'>ID</span>
                        <input type="number" name='name' className='input-text' defaultValue={id} required="required" />
                    </div>



                    <div className='input-box'>
                        <span className='details'>Recipe Name</span>
                        <input type="text" name='name' className='input-text' onChange={(e) => { setRecipeName(e.target.value) }} required="required" />
                    </div>

                    <div className='input-box'>
                        <span className='details'>Upload Image</span>
                        <input type="file"  name='image' className='input-text'  onChange={imageHandler} />
                        
                    </div>


                    <div className='input-box'>
                        <span className='details'>Ingredients</span>
                        <input type="text" name='name' className='input-text' required="required" onChange={(e) => { setIngredients(e.target.value) }} />
                    </div>


                    <div className='input-box'>
                        <span className='details'>Procedure</span>
                        <input type="text" name='name' className='input-text' required="required" onChange={(e) => { setProcedure(e.target.value) }} />

                    </div>









                </form>
                <button className="total" onClick={submitHandler}  >Submit


                </button>

            </div>
        </div>)
}

export default PostRecipe