import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 className={total < 0 ? 'balance minus' : 'balance plus'}>
        ${numberWithCommas(Math.abs(total).toFixed(2))}
      </h1>
    </>
  );
};
