import React from "react";
function ContactList (props){
    return (


<div className="contact-list">

        <img src={props.img}alt="" className="contact-image" />
  
    <h1>{props.name}</h1>
    <div className="contact-information">
        <div className="phone">
            <img src="src/images/calling.png" alt="" />
            <p>{props.phone}</p>
        </div>
        <div className="email-details">
            <img src="src/images/mail.png" alt="" />
            <p>{props.email}</p>
        </div>
    </div>


    <div className="contacts">



    </div>
</div>


    )
}


export default ContactList