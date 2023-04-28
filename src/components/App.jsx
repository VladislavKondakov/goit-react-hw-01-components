import React from 'react';
import Painting from './FriendList/friendlist';
import user from './FriendList/user.json';
import data from './Statistic/data.json';
import friends from './friends/friends.json';
import StatisticMarkUp from './Statistic/statistic';
import FriendsGeneration from './friends/friends.jsx';
import HistoryTransaction from './TransactionHistory/transaction.jsx';
import transaction from './TransactionHistory/transactions.json'
import { Section } from './App.styled';
import { Ul } from './App.styled';
import { UlCenter } from './friends/friend.styled';
import { DivContainer } from './TransactionHistory/transaction.styled';

export const App = () => {
  return (
    
    <div> 
      <DivContainer>
      <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
      {transaction.map(transaction =>
        <HistoryTransaction id={transaction.id}
          type={transaction.type}
          amount={transaction.amount}
          currency={transaction.currency} />
        )}
      </DivContainer>
      
      <UlCenter>
        {friends.map(friend => <FriendsGeneration
  key={friend.id}
  id={friend.id}
  status={friend.isOnline}
  src={friend.avatar}
  name={friend.name}
/>)}
       </UlCenter>
      <Section>
        <h2 className="title">Upload stats</h2>
        <Ul>
          {data.map(data => <StatisticMarkUp 
              key={data.id}
              id={data.id}
              label={data.label}
              percentage={data.percentage} 
            />
          )}
        </Ul>
      </Section>
      <Painting 
        url={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} 
      />
      </div>
      
  );
};
