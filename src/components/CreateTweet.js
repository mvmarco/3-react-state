/* 
  on the textarea we want to add a onChange event, when the user type something happens.
  If we console.log teh event. We get an object for each letter we type. If we do:
  e.target.value we console.log() each letter we type and the previous ones.
*/

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

export default CreateTweet;