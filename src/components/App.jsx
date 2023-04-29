import React from 'react';
import Painting from './FriendList/friendlist';
import user from './FriendList/user.json';
import data from './Statistic/data.json';
import friends from './friends/friends.json';
import StatisticMarkUp from './Statistic/statistic';
import FriendsGeneration from './friends/friends.jsx';
import HistoryTransaction from './TransactionHistory/transaction.jsx';
import transactionData from './TransactionHistory/transactions.json';


export const App = () => {
  return (
    <div> 
      <HistoryTransaction transaction={transactionData} />
      <FriendsGeneration friends={friends} />
      <StatisticMarkUp stats={data} />
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
