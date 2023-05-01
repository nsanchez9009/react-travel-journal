import './App.css'
import Location from './components/Location'
import locations from './locations'
import Navbar from './components/Navbar'

function App() {
  const cards = locations.map(location => {
    return (
      <Location key={location.key} location={location} />
    )
  })
  
  return(
    <div className='app'>
      <Navbar />
      <div className='main'>
        {cards}
      </div>
    </div>
  )
}

export default App