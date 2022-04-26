import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';
function NewExpense(){
    
const AddData = ()=>{

}

    
    return(

        <div className='new-expense' >  
        <ExpenseForm onAddData={AddData} />


        </div>
    )
}

export default NewExpense;