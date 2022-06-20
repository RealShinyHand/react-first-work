import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  let content = <h2 className="expenses-list__fallback">Empty</h2>;

  if (props.items.length > 0) {
    content = props.items.map((expense, index) => {
      return (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          id={expense.id}
        ></ExpenseItem>
      );
    });
  }
  return <ul className="expenses-list">{content}</ul>;
};
export default ExpenseList;
