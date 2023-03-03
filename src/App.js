import {Profile} from './components/Profile/Profile';
import {Statistics} from './components/Statistics/Statistics';
import {FriendList} from './components/FriendList/FriendList';
import {TransactionHistory} from './components/Transaction/TransactionHistory';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/Transaction/transactions.json';
import { MainDiv } from './components/Utils/Utils';


export const App = () => {
  return (
    <MainDiv>
      <Profile avatar={user.avatar} username={user.username} tag={user.tag}  location={user.location} stats={user.stats} />
      <Statistics  data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </MainDiv>
   
  );
};

