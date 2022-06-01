import React, { useState } from 'react'
import * as C from '../Form/styles'

function Cupoms() {
  const [values, setValues] = useState({
    yourName:"",
    eMail:"",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInputChange = (event: any) => {
    setValues({...values, yourName: event.target.value})
  }

  const handleEmailInputChange = (event: any) => {
    setValues({...values, eMail: event.target.value})
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (values.yourName && values.eMail){
      setValid(true)
    }
    setSubmitted(true);
  }

  return (
    <C.Cupom>
      <form className='registerForm' onSubmit={handleSubmit}>
      <h3 className='subscribeTitle'>Subscribe and receive amazing discounts in exclusive games!</h3>
      {submitted && valid ? <div className="sucess message">Success! Thank you for registering</div> : null}
    <input
      onChange={handleNameInputChange}
      value={values.yourName} 
      className='formField' 
      placeholder="Your Name" 
      name="Name" />
     {submitted && !values.yourName ? <span>Please enter your name</span> : null}
    <input
      onChange={handleEmailInputChange}
      value={values.eMail}
      className='formField' 
      placeholder="E-mail" 
      name="Email" />
     {submitted && !values.eMail ? <span>Please enter your E-mail</span> : null}
    <button
    className='formField' 
    type="submit">Subscribe
    </button>
</form>
    </C.Cupom>
  )
}

export default Cupoms