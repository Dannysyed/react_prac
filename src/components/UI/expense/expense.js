import { useState } from 'react';
import Expense_item from '../expenseitem/expenseitem';
import Year from '../year/year';
import './expense.css'
let Expense = (props) => {
    console.log(props);
    let [year, setyear] = useState('2019')
    // console.log(props);
    let year_function = (args) => {

        // console.log(`well this is the year ${args}`); 
        setyear(args)
        console.log(args);
    }
    let filter = props.items.filter(val => val.date.getFullYear() == year)
    console.log(filter);
    return (
        <div className="expenses">
            <Year saved={year_function} give={year}></Year>
            {filter.map((val, i) => <Expense_item key={i} title={val.title} amount={val.amount} date={val.date}></Expense_item>)}
            {/* <Expense_item title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></Expense_item>
            <Expense_item title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></Expense_item>
            <Expense_item title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></Expense_item>
            <Expense_item title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></Expense_item> */}
        </div>
    )
}
export default Expense