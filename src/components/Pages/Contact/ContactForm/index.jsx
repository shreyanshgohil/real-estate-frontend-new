import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form-area">
      <div className="container">
        <div className="row gx-0">
          <div className="col-xl-12">
            <div className="contact-all-wrapper">
              <div className="contact-form-wrap">
                <form
                  action="mail.php"
                  method="POST"
                  className="contact-form ajax-contact"
                >
                  <h3 className="form-title">
                    Do you have questions? Contact Us
                  </h3>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Name *"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        name="number"
                        id="number"
                        placeholder="Phone *"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email Address *"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <select name="subject" id="subject" className="orderby">
                        <option value="" disabled="" selected="" hidden="">
                          Select Subject
                        </option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Villa">Villa</option>
                        <option value="Land">Land</option>
                      </select>
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        name="Your Messsage*"
                        id="message"
                        cols="30"
                        rows="3"
                        className="form-control"
                        placeholder="Your Message *"
                      ></textarea>
                    </div>
                    <div className="form-btn text-start col-12">
                      <button className="th-btn radius">Send message</button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3"></p>
                </form>
              </div>
              <div className="contact-form-thumb overflow-hidden">
                <img src="/images/contact/contact-page-thumb.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
