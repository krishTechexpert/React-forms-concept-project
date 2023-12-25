import {useState} from 'react';
export default function Login() {
  const [enteredValue,setEnteredValue]=useState({
    email:'',
    password:''
  })

  function handleInputChange(event){
    const name =event.target.name;
    const value = event.target.value;

    setEnteredValue(prevValue => {
      return {
        ...prevValue,
        [name]:value
      }
    })

  }

  function handleSubmit(event){
    event.preventDefault();
    console.log('submitted',enteredValue)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={enteredValue.email} onChange={handleInputChange} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={enteredValue.password} name="password" onChange={handleInputChange} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
