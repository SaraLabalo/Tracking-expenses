
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 12),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 50.14,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 294.12,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 30.02,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses) 
  const addExpenseHandler=(newExpense)=>{
    setExpenses((prevExpenses)=>{
      return [newExpense,...expenses]
    })
    console.log(expenses)
  }
  return (
    <div>
      <NewExpense onNewExpense={addExpenseHandler}/>
      <Expenses items={expenses} ></Expenses>
    </div>
    
  );
}

export default App;
