import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });
  const titleChangeHandel = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandel = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandel = (event) => {
    setDate(event.target.value);
  };

  //   const titleChangeHandel = (event) => {
  //     setUserInput((preveState) => {
  //       return { ...preveState, title: event.target.value };
  //     });
  //   };
  //   const amountChangeHandel = (event) => {
  //     setUserInput((preveState) => {
  //       return { ...preveState, amount: event.target.value };
  //     });
  //   };
  //   const dateChangeHandel = (event) => {
  //     setUserInput((preveState) => {
  //       return { ...preveState, date: event.target.value };
  //     });
  //     console.log(userInput);
  //   };

  const submitHandle = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    setTitle("");
    setAmount("");
    setDate("");

    props.onSaveExpenseData(expenseData);
  };
  return (
    <form onSubmit={submitHandle}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandel}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandel}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandel}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancleEditing}>
          Cancle
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
