import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ owners }) => {
  let navigate = useNavigate()
  const initialState = {
    username: '',
    password: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = () => {
    const userData = owners?.find(
      (owner) => owner.username === formState.username
    )

    if (userData) {
      navigate(`/owner/${userData.id}`, { state: { owner: userData } })
    } else {
      alert('ah... nope try again')
    }
  } 

  return (

    <section className="bg">
    <div className="main-container">
      {/* <img src={CIcon} alt="c-logo-icon" className="c-icon" /> */}
      <h1>Login</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
    </section>
  )
}

export default Login
