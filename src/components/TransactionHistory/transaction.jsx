import PropTypes from 'prop-types';
import { Table } from './transaction.styled';
import { DivContainer } from './transaction.styled';
import { Td } from './transaction.styled';

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
            <Td>{transactionItem.type}</Td>
            <Td>{transactionItem.amount}</Td>
            <Td>{transactionItem.currency}</Td>
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
