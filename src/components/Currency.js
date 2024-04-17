import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);
    const changeCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };
    return (
        <div className='alert alert-success'>
        <select className="form-select" id="currencySelect" onChange={(event) => changeCurrency(event.target.value)}>
            <option defaultValue value="£" name="pound">£ Pound</option>
            <option value="$" name="dollar">$ Dollar</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="rupee">₹ Rupee</option>
        </select>
        </div>
    );
};

export default Currency;
