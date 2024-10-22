import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            {/* Ensure the image src points to the correct public path */}
            <img src= {`/images/${props.img}`}className="card--image" alt={props.title} />
            <div className="card--stats">
                {/* Update this path to reference the image in the public folder */}
                <img src= "public/images/star.png" className="card--star" alt="Star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}