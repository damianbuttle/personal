import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                {/* You still need to add the hidden input with the form name to your JSX form */}
                <input type="hidden" name="form-name" value="contact" />  
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="6"></textarea>
                </div>
                <ul className="actions">
                    <li><input type="submit" value="Send Message" className="special" /></li>
                    <li><input type="reset" value="Clear" /></li>
                </ul>
            </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">info@damianbuttle.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(620) 333-4049</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
