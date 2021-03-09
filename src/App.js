// #################################
// STATE
// #################################
/* 
  "State" is essentialy a collected data in your application. Like Youtube, has some data about
  you, eg. your name, how many videos you have etc etc. this kind of sort of stuff. 
  On Twitter, number of Tweets
  and what you did Tweet and etc etc. In a way this information are kind of variables
  that store some data. The difference is that once your "state" change, the data change in your
  state, the UI, whatever you see on the screen is gonna magically update and change. So the UI
  is in sync with the state. So React is smart enough to update and change the UI when the 
  data changes.

*/
import './App.css';
import TweetList from './components/TweetList.js'
import CreateTweet from './components/CreateTweet.js'
function App() {
  const sayHelloHandler = (user) => console.log(`hello ${user}`);
  return (
    <div>
      <h1>Hello React</h1>
      <button onClick={() => { sayHelloHandler('Marco') }}>Click</button>
      <CreateTweet />
      <TweetList />
    </div>
  );
}

export default App;

