import PropTypes from 'prop-types';
import { Table } from './transaction.styled';
import { DivContainer } from './transaction.styled';

export default function HistoryTransaction(props) {
  const { id, type, amount, currency, transaction } = props;

  return (
    <DivContainer> 
    <>
     < DivContainer> </DivContainer>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
<Table>
      <tbody>
        {transaction.map((transactionItem) => (
          <tr key={transactionItem.id}>
            <td>{transactionItem.type}</td>
            <td>{transactionItem.amount}</td>
            <td>{transactionItem.currency}</td>
          </tr>
        ))}
        </tbody>
        </Table>

      
        <tbody>
          <tr id={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      
      </>
      </DivContainer> 
  );
}

HistoryTransaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
