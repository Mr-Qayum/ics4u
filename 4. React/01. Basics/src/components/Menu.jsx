import { useState } from 'react'
import './Menu.css'

function Menu(props) {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="menu">
        {
          visible && (
            <>
              <h1>{props.title}</h1>
              <ol>
                {props.menu.map((item, index) => {
                  return <li key={index}>{item}</li>
                })}
              </ol>
            </>)
        }
      </div>
      <button onClick={() => setVisible(!visible)}>Hide</button>
    </>
  )
}

export default Menu