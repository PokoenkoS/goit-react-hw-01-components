import PropTypes from 'prop-types'; 
import {Transaction} from "./Transaction"


    
    export const TransactionHistory =({items}) => {
        return (
            <table >
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(transaction => (
        <Transaction
        key={transaction.id}
        type={transaction.type}
        amount={transaction.amount}
        currency={transaction.currency}/>
    ))}
        
  </tbody>
</table>
        )
    }

    TransactionHistory.propTypes = {
        items: PropTypes.array,       
    }
  