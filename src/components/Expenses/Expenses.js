import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const expenses = props.expenses;

  const [seletedYear, setSelectedYear] = useState(2021);
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === seletedYear;
  });
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setSelectedYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={seletedYear}
          onfilterChange={filterChangeHandler}
        ></ExpenseFilter>
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
}
export default Expenses;
