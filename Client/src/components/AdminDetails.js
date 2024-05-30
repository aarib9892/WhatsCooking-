import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './AdminDetails.css'

function AdminDetails(props) {

    useEffect(() => {
        axios.get('http://localhost:3001/getData').then(response => { props.setRecipeList(response.data) });



    }, [props.setRecipeList])
    console.log(props.recipeList)


    return (
        <>
        

            <div className="container-9">



            <h1 className='head'>Admin Panel</h1>
                <h2>Recipes Uploads</h2>
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">ID</div>
                        <div className="col col-2">Recipe Name</div>
                        <div className="col col-3">Ingredients</div>
                        <div className="col col-4">Procedures</div>

                    </li>




                    <>
                        {props.recipeList.map((val, key) => (
                            <li key={key} className="table-row">
                                <div className="col col-1" data-label="Job Id">{val.id}</div>
                                <div className="col col-2" data-label="Customer Name">{val.strMeal}</div>
                                <div className="col col-3" data-label="Date">{val.strIngredients}</div>
                                <div className="col col-4" data-label="Age">{val.strInstructions}</div>

                                {/* <button>Delete</button> */}
                            </li>


                        ))}
                    </>






                </ul>
            </div>
            </>
        
    )
}

export default AdminDetails