import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import Card from "../common-UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const ExpensesList = (props) => {
  const onFilterChangeHandler = (year) => {
    console.log(year);
  };

  const items = props.expenses.map((expense) => (
    <ExpenseItem expense={expense}></ExpenseItem>
  ));
  return (
    <diV>
      <Card>
        <ExpenseFilter onFilterChanged={onFilterChangeHandler} />
      </Card>
      <Card className="expenses-list">{items}</Card>
    </diV>
  );
};

export default ExpensesList;



