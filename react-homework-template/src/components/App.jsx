import React from 'react';
import { Profile } from './Profile/Profile';
import user from './Profile/

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
    </div>
  );
}

// const user = {
//   username: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// export const App = () => {
//   return (
//     <div className="profile">
//       <div className="description">
//         <img src={user.avatar} alt="User avatar" className="avatar" />
//         <p className="name">{user.username}</p>
//         <p className="tag">@{user.tag}</p>
//         <p className="location">{user.location}</p>
//       </div>

//       <ul className="stats">
//         <li>
//           <span className="label">Followers</span>
//           <span className="quantity">{user.stats.followers}</span>
//         </li>
//         <li>
//           <span className="label">Views</span>
//           <span className="quantity">{user.stats.views}</span>
//         </li>
//         <li>
//           <span className="label">Likes</span>
//           <span className="quantity">{user.stats.likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };
