import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFiltereYear]= useState('2020');

  const filterChangeHandler = (selectedYear) =>{
    setFiltereYear(selectedYear)
  }
  const filteredExpenses = props.items.filter(expenses=>{
    return expenses.date.getFullYear().toString( ) === filteredYear;
  })
  return (
    <div>
    <Card calssName="expenses">
    <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>
    
    </Card>
    </div>
  );
}

export default Expenses;
