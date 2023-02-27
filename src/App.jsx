import {Profile} from './components/Profile';
import {Statistics} from './components/Statistics';
import user from '../src/user.json';
import data from '../src/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile avatar={user.avatar} username={user.username} tag={user.tag}  location={user.location} stats={user.stats} />
      React homework template
      <Statistics  data={data} />
    
    </div>
   
  );
};

