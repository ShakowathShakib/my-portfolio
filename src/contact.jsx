export default function Contact() {
     return (
     <div>
          <h2>Contact Us</h2>
          <form className="contact-form">
          <label htmlFor="name">First Name</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" required/>
    
          <label htmlFor="name">Last Name</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" required/>

    <label htmlFor="email">Your Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" required/>

    <label htmlFor="message">Your Message</label>
    <textarea id="message" name="message" placeholder="Enter your message" required></textarea>

    <button type="submit">Send Message</button>
          </form>
     
    
    
  
     </div>
     );
     }