import { useState } from 'react';
import './App.css';
import Add from './components/addnew/add/add';
import Expense from './components/UI/expense/expense';
let dummy = [{
  title: 'Toilet Paper',
  amount: 94.12,
  date: new Date(2020, 7, 14),
},
{ title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
{
  // id: 'e3',
  title: 'Car Insurance',
  amount: 294.67,
  date: new Date(2021, 2, 28),
},
{
  // id: 'e4',
  title: 'New Desk (Wooden)',
  amount: 450,
  date: new Date(2021, 5, 12),
},]

function App() {
  let [expense, setexpense] = useState(dummy)
  let get_expense = (args) => {
    // console.log(args);
    setexpense((prev) => {
      return [args, ...prev]
    })
  }
  console.log(expense);


  return (
    <div className="App">
      <Add saved={get_expense}></Add>
      <Expense items={expense}></Expense>



    </div>
  );
}

export default App;
