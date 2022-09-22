import React from 'react';
import user from './profile/Profile';
import Profile from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { statisticData } from './statistics/Statistics';
import { FriendList } from './friends/Friends';
import { friends } from './friends/Friends';
import { TransactionHistory } from './Transaction/TransactionHistory';
import { transactions } from './Transaction/TransactionHistory';

export function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}
