import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
const NewExpense = function (props) {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const cancleEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancleEditing={cancleEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
