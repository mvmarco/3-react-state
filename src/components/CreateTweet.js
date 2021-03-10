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
      <textarea onChange={userInputHandler} name="" id="" cols="50" rows="5"></textarea>
      <button>Submit</button>
      <p>Tweet Input: {textInput} </p>
    </form>
  )
}

export default CreateTweet;