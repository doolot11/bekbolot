
import Card from '../UI/Card';
import ExpenseDate from '../expenses/ExpenseDate';
import '../expenses/Expenseitem.css'



function ExpenseItem(props){



    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description" >
                <h2>{props.text}</h2>
                <div className="expense-item__price" >{props.price}</div>
            </div>

        </Card>
    );
}


export default ExpenseItem;

