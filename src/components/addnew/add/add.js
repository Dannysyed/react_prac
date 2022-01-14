import { useState } from 'react'
import Form from "../form/form"

let Add = (props) => {
    // let [expense, setexpense] = useState('')
    let input_function = (args) => {
        // console.log(args);
        // setexpense(args)
        props.saved(args)



    }
    console.log(`am adding something new in the very x of git hub`);
    // console.log(expense);
    return (

        <div>
            <Form saved={input_function}></Form>
        </div>
    )
}
export default Add