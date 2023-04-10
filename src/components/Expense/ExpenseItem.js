import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [expenseTitle, setExpenseTitle] = useState(props.title);

    const buttonHandler = () => {
        setExpenseTitle('Updated!!');
        console.log(expenseTitle)
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={buttonHandler}>Change Expense Title</button>
        </Card>
    );
}

export default ExpenseItem;