import './App.css';
import Navbar from "./components/Navbar.jsx";
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import ContactList from './components/ContactList.jsx'
import Jokes from './components/jokes.jsx'
import cardData from './data.js'
import jokesData from './components/jokesData.jsx'


function App() {

//<div>

//<Hero/>
//<Card/>
//<ContactList/>
const DataElements = cardData.map(data => {
return <Card
price = {data.price}
title = {data.title}
location = {data.location}
reviewCount = {data.stats.reviewCount}
rating = {data.stats.rating}
img = {data.coverImg}




/>



})


return (
<div className='container' >

{DataElements}


</div>


)

}






export default App;
