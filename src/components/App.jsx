import React from 'react';

import Profile from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friends/Friends';
import { TransactionHistory } from './Transaction/TransactionHistory';
import user from '../data.json/user.json';
import friends from '../data.json/friends.json';
import statistics from '../data.json/data.json';
import transactions from '../data.json/transactions.json';

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
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}
