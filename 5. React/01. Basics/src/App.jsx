import './App.css'
import Menu from './components/Menu'

function App() {

  return (
    <>
      <Menu title={"Fast Food Menu"} menu={["Hamburger", "Hot Dogs", "Pizza"]} />
      <Menu title={"Healthy Menu"} menu={["Salad", "Water", "Smoothie"]} />
    </>
  )
}

export default App
