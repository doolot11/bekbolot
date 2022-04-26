
import '../expenses/ExpenseDate.css'

function ExpenseDate(props){
    let month = props.date.toLocaleString('en-US', {month: 'long'})
    let date = props.date.toLocaleString('en-US', {day: '2-digit'})
    let year = props.date.getFullYear();
        
    return(
        <div className='expense-date' >
            <div className='expense-date__month' >{month}</div>
             <div className='expense-date__day' >{date}</div>
            <div className='expense-date__year' >{year ? '2 kndvk' : year}</div>
        </div>
    );
}

export default ExpenseDate;