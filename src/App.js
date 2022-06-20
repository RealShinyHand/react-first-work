import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const expensesDummy = [
  {
    id: "e1",
    title: "Car Insurance1",
    amount: 294.67,
    date: new Date(2022, 6, 18),
  },
  {
    id: "e2",
    title: "Car Insurance2",
    amount: 294.67,
    date: new Date(2022, 6, 18),
  },
  {
    id: "e3",
    title: "Car Insurance3",
    amount: 294.67,
    date: new Date(2022, 6, 18),
  },
  {
    id: "e4",
    title: "Car Insurance4",
    amount: 294.67,
    date: new Date(2022, 6, 18),
  },
];
function App() {
  const [expenses, setEexpenses] = useState(expensesDummy);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    setEexpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expenses);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense addExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
