import React from 'react';
import { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onNewExpense(expenseData);
        //console.log(expenseData)
    }

    const startEditing = () =>{
        setIsEditing(true)
    }
    const closeEditing = () =>{
        setIsEditing(false)
    }

    return(
        <div className="new-expense">
            { !isEditing && <button onClick={startEditing}> Add new button</button>}
            { isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCloseEditing={closeEditing}></ExpenseForm>}
        </div>
    );
}

export default NewExpense;