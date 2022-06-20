import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function btnClick() {
    setTitle("Updated");
  }
  return (
    <li>
      <Card className="expense-item">
        <div>
          <ExpenseDate date={props.date}></ExpenseDate>
        </div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={btnClick}>Button</button>
      </Card>
    </li>
  );
}
export default ExpenseItem;
