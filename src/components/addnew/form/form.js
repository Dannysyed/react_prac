import { useState } from 'react'
let Form = (props) => {
    let [title, settitle] = useState('')
    let [amount, setAmount] = useState('')
    let [date, setdate] = useState('')
    let changehandler = (e) => {
        // console.log(e.target.value);
        settitle(e.target.value)



    }
    // console.log(title);
    let amountHandler = (e) => {
        // console.log(e.target.value);
        setAmount(e.target.value)


    }
    let dateHandler = (e) => {
        setdate(e.target.value)

    }
    let subhandler = (e) => {
        e.preventDefault()
        let expense = { title: title, amount: Number(amount), date: new Date(date) }
        // console.log(obj);
        props.saved(expense)


    }

    return (
        <form onSubmit={subhandler}>
            <div className="new-expense__controls">
                <div className=".new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={changehandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type='date' min='2019-01-01' max='2022-12-12' onChange={dateHandler}></input>
                </div>
                <div className="new-expense__control">
                    <button type="submit" >Add expense</button>
                </div>

            </div>
        </form>
    )
}
export default Form