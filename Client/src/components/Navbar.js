import {useState} from 'react'
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'


const NavBar=()=>{
    const [enteredMeal, setenteredMeal] = useState(null);
     const mealHandler=(event)=>{
        setenteredMeal(event.target.value)
     }
    return (
      <header className={classes.header}>
        <NavLink to="/" className={classes.logo}>
          Whats Cooking?{" "}
        </NavLink>
        <nav className={classes.nav}>
          <ul>
            <li>
              <input
                className={classes.search}
                type="text"
                placeholder="cravings ends here.."
                onChange={mealHandler}
              />
            </li>
            {enteredMeal !== null ? (
              <li>
                <NavLink
                  to={`/${enteredMeal}`}
                  activeClassName={classes.active}
                >
                  Search
                </NavLink>
              </li>
            ) : (
              <li>
              
                  Search
               
              </li>
            )}

            <li>
              <NavLink to="/scan-product" activeClassName={classes.active}>
                Scan Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/post-recipe" activeClassName={classes.active}>
                Post
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
}
export default NavBar;
