function Card(props){


return (
<div className="container">
 
<div className="card">
    <img src={props.image} className="card-image"  alt="" />
    <div className="card-stats">
        <img src="src/images/Star 1.png" alt="" className="card-star" />
        <span>5.0</span>
        <span>(6) .</span>
        <span>USA</span>
    </div>
    <p className="grey">{props.paragraph1}</p>
    <p className="grey"><strong>From ${props.price}</strong>/Person</p>

</div>



</div>

)
}




export default Card

