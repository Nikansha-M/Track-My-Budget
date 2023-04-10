import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredExpense, setEnteredExpense] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState();;
    
    const [userInput, setUserInput] = useState({ // utilizing One State
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    })

    const expenseChangeHandler = (event) => {
        // setEnteredExpense(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })
    };
    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        })
    };
    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        })
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Expense</label>
                    <input type="text" onChange={expenseChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2018-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;