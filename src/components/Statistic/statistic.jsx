import PropTypes from 'prop-types';
import { LiUser } from './statistic.styled';
import data from '../Statistic/data.json'
import { Section } from './statistic.styled';
import { Ul } from './statistic.styled';
  export default function StatisticMarkUp ({ title, stats })  {
  return (
    <Section>
      <h2>Upload stats</h2>

      <Ul>
        {data.map(({ id, label, percentage }) => {
          return (
            <LiUser key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </LiUser>
          );
        })}
      </Ul>
     </Section>
  );
};

StatisticMarkUp.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
}