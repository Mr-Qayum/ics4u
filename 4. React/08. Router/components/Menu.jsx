import { useNavigate } from "react-router-dom"

function Menu() {
    const navigate = useNavigate();

    return (
      <div>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
      </div>
    )
  }
  
  export default Menu