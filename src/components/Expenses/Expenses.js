import React from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
const Expenses = (props) => {
  const filterChangeHandler = (selectedYear) => {
    props.onSetFilteredYear(selectedYear);
  };

  //Expenses only by selected years:
  const filteredExpensesByYear = props.items.filter((item) => {
    return props.filteredYear === item.date.getFullYear().toString();
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={props.filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpensesByYear} />
      <ExpensesList
        items={filteredExpensesByYear}
        onRemoveItem={props.onRemoveItem}
      />
    </Card>
  );
};

export default Expenses;
