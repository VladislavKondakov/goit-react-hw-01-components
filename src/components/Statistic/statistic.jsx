import PropTypes from 'prop-types';
import { LiUser } from './statistic.styled';
 
export default function StatisticMarkUp(props) {
    const {id,label,percentage} = props
    return (
        
    <LiUser id={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </LiUser>
  
    )
}

StatisticMarkUp.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
    percentage: PropTypes.number,
}