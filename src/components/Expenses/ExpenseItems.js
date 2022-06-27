import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <div>
          <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button
          onClick={() => {
            props.onRemoveItem(props.id);
          }}
        >
          Remove
        </button>
      </Card>
    </li>
  );
};

export default ExpenseItems;
