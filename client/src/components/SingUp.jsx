import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'



const SignUp = () => {
  
  let navigate = useNavigate()
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}/owners/`, formState)
    setFormState(initialState)
    navigate(`owner/${res.data.id}`, { state: { owner: res.data } })
  }
  

  return (
    <div className="main-container">
      {/* <img src={CIcon} alt="c-logo-icon" className="c-icon" /> */}
      <h1>Sign Up</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            id="firstName"
            type="text"
            onChange={handleChange}
            value={formState.firstName}
            placeholder="First Name"
          />
          <input
            id="lastName"
            type="text"
            onChange={handleChange}
            value={formState.lastName}
            placeholder="Last Name"
          />
          <input
            id="email"
            type="text"
            onChange={handleChange}
            value={formState.email}
            placeholder="Email"
          />
          <input
            id="username"
            type="text"
            onChange={handleChange}
            value={formState.username}
            placeholder="Username"
          />
          <input
            id="password"
            type="text"
            onChange={handleChange}
            value={formState.password}
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
