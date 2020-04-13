import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmouunt] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Adicionar uma nova transação</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Descrição</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Informe a descrição..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Valor <br />
            (negativo -> despesa | positivo -> renda)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmouunt(e.target.value)}
            placeholder="Informe o valor..."
          />
        </div>
        <button className="btn">Adicionar transação</button>
      </form>
    </>
  );
};
