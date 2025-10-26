import React from 'react'

export default function Contact(){
  return (
    <>
      <h2>Contact Me</h2>
      <div className="about-grid">
        <div>
          <p className="lead">I'd love to hear from you. Use the form to send a message or reach me via the contact details.</p>
          <div style={{marginTop:18}}>
            <h4>Contact Details</h4>
            <p className="muted">Address: 123 Demo Street, Cityville, Country</p>
            <p className="muted">Phone: +1 (555) 123-4567</p>
            <p className="muted">Email: hello@example.com</p>
            <div style={{marginTop:12}}>
              <h4>Social</h4>
              <div className="social-list">
                <a href="https://instagram.com/demo" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i><span>Instagram</span></a>
                <a href="https://twitter.com/demo" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i><span>Twitter</span></a>
                <a href="https://github.com/demo" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i><span>GitHub</span></a>
                <a href="https://linkedin.com/in/demo" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i><span>LinkedIn</span></a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="contact-form" onSubmit={(e)=>{
            e.preventDefault();
            const fd = new FormData(e.target);
            const name = fd.get('name') || '';
            const email = fd.get('email') || '';
            const message = fd.get('message') || '';
            alert(`Message sent (mock)\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`)
          }}>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" placeholder="John Doe" required />

            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" placeholder="john@example.com" required />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" placeholder="Hi — I'm interested in your work on ..." required rows={8}></textarea>

            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}
