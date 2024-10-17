function Card(prop){
const time = new Date()

return (
<div className="container">
 
<div className="card">
    <img src="src/images/image 12.png" className="card-image"  alt="" />
    <div className="card-stats">
        <img src="src/images/Star 1.png" alt="" className="card-star" />
        <span>5.0</span>
        <span>(6) .</span>
        <span>USA</span>
    </div>
    <p className="grey">Life Lessons with Katie Zaferes</p>
    <p className="grey"><strong>From $136</strong>/Person</p>

</div>


<div className="card">
    <img src="src/images/image 12.png" className="card-image"  alt="" />
    <div className="card-stats">
        <img src="src/images/Star 1.png" alt="" className="card-star" />
        <span>5.0</span>
        <span>(6) .</span>
        <span>USA</span>
    </div>
    <p className="grey">Life Lessons with Katie Zaferes</p>
    <p className="grey"><strong>From $136</strong>/Person</p>

</div>


</div>

)


}


export default Card

