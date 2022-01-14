import { useState } from 'react';
import Date from '../dates/date';
import './expenseitem.css'
let Expense_item = (props) => {
    // let [title, settitle] = useState('please click on the click button ')
    let handler = () => {
        // settitle('this is the handler')
    }
    console.log(props);
    return (
        <div className='expense-item'>
            {/* <Dates date={props.date}></Dates> */}
            <Date date={props.date}></Date>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={handler}>click</button>
            </div>
        </div>)


}
export default Expense_item