import 'bootstrap/dist/css/bootstrap.min.css';
import './components/App.css'
import SearchMeal from './components/SearchMeal';
import Barcode from './components/Barcode';
import Home from './components/Home'
import { Fragment } from "react";
import {useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from './components/Layout';
import Scandata from './components/Scandata';
import PostRecipe from './components/PostRecipe';
import Admin from './components/Admin';
import AdminDetails from './components/AdminDetails';
const App = () => {
    const [recipeList, setRecipeList] = useState([])
    return (
        <Fragment>
            <Layout />
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>

                <Route path='/scan-product' exact>
                    <Barcode />
                </Route>

                <Route path='/scan-product/:productbarcode' exact>
                    <Scandata />
                </Route>

                
                <Route path='/post-recipe' exact>
                    <PostRecipe />
                </Route>

                
                <Route path='/admin' exact>
                    <Admin />
                </Route>

               

                
                <Route path='/admin-Details' exact>
                    <AdminDetails recipeList={recipeList} setRecipeList={setRecipeList} />
                </Route>



                <Route path='/:recipe' >
                    <SearchMeal />
                </Route>
            </Switch>
        </Fragment>

    )

}
export default App;
