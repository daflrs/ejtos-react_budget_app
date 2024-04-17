import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        let newValue = event.target.value;
        if(newValue < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        if(newValue > 20000) {
            alert("The budget value cannot exceed £20000. The value you are trying to input is £"+newValue);
            return;
        }
        setNewBudget(newValue);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
