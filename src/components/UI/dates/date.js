let Date = (props) => {
    let month = props.date.toLocaleString('en-US', { month: 'long' })
    let date = props.date.toLocaleString('en-US', { day: '2-digit' })

    let year = props.date.getFullYear()
    return (
        <div>
            <div>{month}</div>
            <div>{date}</div>
            <div>{year}</div>
        </div>
    )
}
export default Date