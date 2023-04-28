import PropTypes from 'prop-types';
import { Table } from './transaction.styled'; 
export default function HistoryTransaction(props) {
    const {id,type,amount,currency} = props
    return (
        <Table>
  <tbody>
    <tr id={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
</Table>
    )
}

HistoryTransaction.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}