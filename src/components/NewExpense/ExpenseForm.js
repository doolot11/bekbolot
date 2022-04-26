import { useState } from 'react';
import './ExpenseForm.css'
import Card from '../UI/Card';

function ExpenseForm(props){
    const [enteredtitle, setEnteredTitle]= useState('');
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')
    const [enteredForm, setEnteredForm] = useState('')
    const titleChangeHandler = (event)=>{
        // console.log(event);
        setEnteredTitle(event.target.value)
        // console.log(enteredtitle);


    }

    const formChangeHandler = (event)=>{
        setEnteredForm(event.target.value)

    }

    const amontChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
        // console.log(enteredAmount);
    }


        const dateChangeHandler = (event)=>{
            setEnteredDate(event.target.value)
            // console.log(enteredDate);
        }


    // const [ userInput, setUserInput]= useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    // const titleChangeHandler =(event)=>{
    //     setUserInput({...userInput, enteredTitle: event.target.value})
    //     // console.log(userInput);
    // }
    // const amountChangeHandler =(event)=>{
    //     setUserInput({...userInput, enteredAmount: event.target.value})
    //     // console.log(userInput);
    // }
    // const dateChangeHandler =(event)=>{
    //     setUserInput({...userInput, enteredDate: event.target.value})
    //     // console.log(userInput);
    // }
    
    const submitHendler=(event)=>{
        event.preventDefault()
        const expenseData={
            text:enteredtitle,
            form:enteredForm,
            price:enteredAmount,
           
            date: new Date(enteredDate),
            id: Math.random().toString()
        }
        props.onAddData(expenseData)
    }

    return(
        <Card >
        <form onSubmit={submitHendler} className='form'  >

            <div className='.new-expense__controls' >
                <div className='new-expense__control ' >
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredtitle} />
           
                </div>


                <div className='new-expense__control' >
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amontChangeHandler} />
                </div>


                <div className='new-expense__control ' >
                    <label>Date</label>
                    <input type='date' min='2021-01-01' max='2023-01-01' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions' > 

                    <button>Add Expense</button>
                 </div>
        </form>
        </Card>
    )
}
export default ExpenseForm;
