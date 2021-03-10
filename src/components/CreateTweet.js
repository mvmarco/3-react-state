/* 
  on the <textarea> we want to add a onChange event (The onchange event occurs 
  when the value of an element has been changed), when the user type, something happens.
  For instance, update a paragraph below the <textarea> here.

  If we console.log the event. We get an object for each letter we type. If we do:
  e.target.value we console.log() each letter we type and the previous ones.

  function CreateTweet() {
    const userInputHandler = (e) => {
      console.log(e.currentTarget.value);
    };
    return (
      <form>
        <textarea onChange={userInputHandler} name="" id="" cols="50" rows="5"></textarea>
        <button>Submit</button>
      </form>
    )
  }

  now we add a "useState" so that when the user types, an onChange event occurs, which take
  the original and empty "textInput" and update its state/value with the function "setTextInput".
  In other words, all the time the event of typing occurs, the paragraph gets updated because
  we pass in the new updated state, <p>Tweet Input: {textInput} </p>

  An important thing to notice is that the user input (textarea value) it is not connected 
  to the state. Which means the paragraphs value (output) gets updated from the initial React 
  state we defined (useState('ss'). This is what is referred to "uncontrolled components". 
  whether is an empty string " " or not. And the input field shows an empty field.
  Because the input field still tracks its own internal state while the output paragraph is 
  driven by the actual React state coming from the handler function. By giving the input the
  value from React's state <textarea value={textArea}, it doesn't  use anymore its internal state,
  but the state you provided from React. The teh component becomes a "controlled component". 
  Where the React initial state should be seen for the input field and for the output paragraph 
  once you start the application.

  WHY DOIN THAT: if we cancel the paragraph with a click event or manually. The input the user
  has typed in the form remains there. This may cause some problems along the way. Because the
  state updates but you want the App to update too ALL THE TIME on the screen. In other words,
  the data you have on your state has to reflect completely how the application looks like.

  check here: https://www.robinwieruch.de/react-controlled-components
*/

import {useState} from 'react';
function CreateTweet() {
  // state
  const [textInput, setTextInput] = useState('');
  // function
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <form>
      <textarea value={textInput} onChange={userInputHandler} name="" id="" cols="50" rows="5"></textarea>
      <button>Submit</button>
      <p> <strong> Tweet output: {textInput} </strong></p>
    </form>
  )
}

export default CreateTweet;