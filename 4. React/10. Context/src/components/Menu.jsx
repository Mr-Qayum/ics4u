import { useNavigate } from "react-router-dom"

function Menu({ children }) {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/register')}>Register</button>
      {children}
    </div>
  )
}

export default Menu