import React from 'react';
import user from './profile/Profile';
import Profile from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { statisticData } from './statistics/Statistics';

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
    </div>
  );
}
