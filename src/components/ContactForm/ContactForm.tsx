export const ContactForm = () => {
  return (
    <section className="section-sm pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mb-4">Hi Write To Me</h2>
            <form action="#" method="POST" className="row">
              <div className="col-lg-6">
                <input type="text" className="form-control mb-4" id="name" name="name" placeholder="Your Name" />
              </div>
              <div className="col-lg-6">
                <input type="email" className="form-control mb-4" id="email" name="email" placeholder="Your Email" />
              </div>
              <div className="col-12">
                <input type="text" className="form-control mb-4" id="subject" name="subject" placeholder="Subject" />
              </div>
              <div className="col-12">
                <textarea name="message" id="message" className="form-control mb-4" placeholder="Your Message" />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
