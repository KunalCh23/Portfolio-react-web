import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
	function sendEmail(e){
		e.preventDefault();

		emailjs.sendForm("service_zxoxbk4",
		'template_qxpis7u',
		e.target,
		"user_sW4wkzSCvHempclgUj4bb").then(res=>{
			console.log(res);
		}).catch(err=> console.log(err));
	}
	return (
		<section className="c-contact" id="contact">
			<div className="l-container">
				<h1>Contact Me</h1>
				<form className="c-contact__form" onSubmit={sendEmail}>
					<label htmlFor="">Name: </label>
					<input type="name"  name="name" placeholder='Name'/>
                    <br></br>
					<label htmlFor="">Email: </label>
					<input type="email"  name="user_email" id="" placeholder='Email'/><br></br>
					<label htmlFor="">Message: </label>
					<textarea rows="5"  name='message' ></textarea>
					{/* <button type="submit" className="btn btn-primary" >Send</button> */}
					<input 
					type="submit"
					value="Send"
					
					className='form-control btn btn-primary'
					// style ={{marginTop:"30px"}}
					/>
				</form>

			</div>
		</section>
	)
}



export default Contact