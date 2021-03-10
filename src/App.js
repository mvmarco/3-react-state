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
  is in sync with the state. So React is smart enough to re-render update and change the UI 
  when the data changes.

  What we want is: when you click the <button> in the text <h1>Hello {name}</h1> 
  the name needs to change. So what we can do is: create a let name and update the
  result in the callback function of the eventListener:
    const sayHelloHandler = (e) => name = "Marco Dev";
  but what happens is that the data gets updated but the current UI not.
  you can check it in the console.log(name)

  function App() {
    let name =  'Marco'
    const sayHelloHandler = (e) => {name = "Marco Dev"
    console.log(name);};
    return (
      <div>
        <h1>Hello {name}</h1>
        <button onClick={sayHelloHandler}>Click</button>
        <CreateTweet />
        <TweetList />
      </div>
    );
  }

  so this is where "state" is very powerful because we can create state with this data
  ("Marco") and when that state changes the UI automatically updates it. And it is gonna
  re-render that specific part.
  ------------------------------------------------------------------------------------------
  So the steps to use "state" are:
  1. Before we had to import React, {useState} from 'react'; in App.js but now we can:
     import { useState } from 'react'; Since React is already imported in index.js
  2. create a const that takes between [], the name of the "variable" we want to use
     and a "function" (usually named: setXXX if the variable is called XXX). 
        const [name, setName]
     This function, is provided by React to be able to modify both value and the UI of "variable"
     we are using. In order to do this, we need to set const [name, setName] to be equal to 
     "useState('YYY')" passing as params the value of the original "variable" we passed in the
     const. The result will be something like this:
        const [name, setName] = useState("Marco")
  3. then we update somewhere else, in this case in the callback of the event listener, the 
     setName function with the name we want to replace the original value:
        setName("Marco, you will be a good dev")

  function App() {
    const [name, setName] = useState("Marco")
    const sayHelloHandler = (e) => setName("Marco, you will be a good dev");
    return (
      <div>
        <h1>Hello {name}</h1>
        <button onClick={sayHelloHandler}>Click</button>
        <CreateTweet />
        <TweetList />
      </div>
    );
  }
  ------------------------------------------------------------------------------------------
  Here we make another example using the CreateTweet component

  import './App.css';
  import TweetList from './components/TweetList.js'
  import CreateTweet from './components/CreateTweet.js'

  function App() {
    const name = "Marco";
    const message = "I love my dog"
    return (
      <div>
        <h1>Hello {name}</h1>
        <CreateTweet />
        <TweetList name={name} message={message} />
      </div>
    );
  }

  export default App;
  ------------------------------------------------------------------------------------------
  Another example is to add the "state" here in App.js

  the name as react state it will be "Marco" and we can update the name in the the <TweetList>
  because we passed setName={setName}. So originally in the TweetList.js the name is "Marco",
  then we pass "setName" as PROPS in the TweetList params. We use them as base for a click event
  and when you click, the name will pass from "Marco" to something else.
*/
import './App.css';
import TweetList from './components/TweetList.js'
import CreateTweet from './components/CreateTweet.js'
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Marco");
  const message = "I love my dog"
  return (
    <div>
      <h1>Hello {name}</h1>
      <CreateTweet />
      <TweetList name={name} setName={setName} message={message} />
    </div>
  );
}

export default App;

