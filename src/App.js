import React, { useState } from "react";
import "./App.css";



function FormCustomHooks(initialState) {
  const [value, setValue] = useState(initialState);
  function onChange(e) {
    setValue(e.target.value);
  }
  //return [value, onChange]
  return { value, onChange };
}
function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [contactNumber, setContactNumber] = useState("");
  const firstName = FormCustomHooks("");
  const lastName = FormCustomHooks("");
  const email = FormCustomHooks("");
  const contactNumber = FormCustomHooks("");
  function submitInfo(event) {
    event.preventDefault();
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(contactNumber.value);
  }
  return (
    <div className="App">
      <form onSubmit={submitInfo}>
        {/* <input type="text" placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} /> */}
        <input type="text" placeholder="first name" {...firstName} />
        <br />
        <input type="text" placeholder="last name" {...lastName} />
        <br />
        <input type="email" placeholder="email" {...email} />
        <br />
        <input
          type="tel"
          placeholder="enter contact number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          {...contactNumber}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;