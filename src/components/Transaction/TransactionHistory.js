import PropTypes from 'prop-types'; 
import {Transaction} from "./Transaction"
import {TransactioneTable} from './Transaction.styled'

    
    export const TransactionHistory =({items}) => {
        return (
            <TransactioneTable>
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
</TransactioneTable>
        )
    }

    TransactionHistory.propTypes = {
        items: PropTypes.array,       
    }
  