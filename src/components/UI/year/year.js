import { useState } from 'react'
let Year = (props) => {
    // let [year, setyear] = useState('')
    console.log();
    let handler = (e) => {
        // console.log(e.target.value);
        // setyear(e.target.value)
        // console.log(year);
        props.saved(e.target.value)
    }
    return (
        <div className="year">
            <select value={props.give} onChange={handler}>
                <option value={'2020'}>2020</option>
                <option value={'2021'}>2021</option>
                <option value={'2022'}>2022</option>
                <option value={'2019'}>2019</option>
            </select>


        </div >
    )
}
export default Year