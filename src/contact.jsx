export default function Contact() {
     return (
     <div>
      {/* contact form */}
          <h2>Contact Us</h2>
          <form className="contact-form">
          <label htmlFor="first-name">First Name</label>
    <input type="text" id="first-name" name="first-name" placeholder="Enter your first name" required/>
    
          <label htmlFor="last-name">Last Name</label>
    <input type="text" id="last-name" name="last-name" placeholder="Enter your last name" required/>

    <label htmlFor="email">Your Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" required/>

    <label htmlFor="message">Your Message</label>
    <textarea id="message" name="message" placeholder="Enter your message" required></textarea>

    <button type="submit">Send Message</button>
          </form>
     
    
    
  
     </div>
     );
     }