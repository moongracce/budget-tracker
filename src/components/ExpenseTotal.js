import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = ()  => {
    const {expenses} = useContext(AppContext);

    const total = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

  return (
    <div className='alert p-4 alert-primary'>
        <span>Spent so far: Rp. {total}</span>
    </div>
  );
};

export default ExpenseTotal;