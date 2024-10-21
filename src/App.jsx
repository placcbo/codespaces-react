import './App.css';
import Navbar from "./components/Navbar.jsx";
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import ContactList from './components/ContactList.jsx'
import Jokes from './components/jokes.jsx'

import jokesData from './components/jokesData.jsx'


function App() {

//<div>
//<Navbar/>
//<Hero/>
//<Card/>
//<ContactList/>

const jokeElements = jokesData.map(joke => {
  return <Jokes
  setup = {joke.setup}
  punchline = {joke.punchline}
  
  />
})

return (
<div>

{jokeElements}

</div>


)

}






export default App;
