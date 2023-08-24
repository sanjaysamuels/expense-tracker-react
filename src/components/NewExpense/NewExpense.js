import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) =>{
    const [isAdding, setIsAdding] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsAdding(false);
    };

    const startEditingHandler = () => {
        setIsAdding(true);
    };

    const stopEditingHandler = () =>{
        setIsAdding(false);
    }

    return <div className='new-expense'>
        {!isAdding && <button onClick={startEditingHandler}>Add New Expense</button>} 
        {isAdding && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
};

export default NewExpense;