import PropTypes from 'prop-types'; 
export const Transaction =({
    id, 
    type,
    amount,
    currency,
}) => {
    return(

      <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    
    )
    }
    Transaction.propTypes = {
        id:PropTypes.string,
        type:PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired,
    }