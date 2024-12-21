export default function ContactUs() {
    return (
      <section className="text-center mt-4">
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Please fill out the form below.</p>
        <form className="w-50 mx-auto mt-3">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </section>
    );
  }
  