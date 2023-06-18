export const Newsletter = () => {
  const newsletterTitle = 'Newsletter Title'; // Replace with actual data
  const newsletterContent = 'Newsletter content goes here'; // Replace with actual data

  const handleSubscribe = () => {
    // Implement subscribe functionality
  };

  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2>{newsletterTitle}</h2>
            <p className="text-light px-md-5 py-4 border-start border-end border-primary">{newsletterContent}</p>
            <form className="row justify-content-center">
              <div className="input-group col-md-8">
                <input type="text" className="form-control" placeholder="Your Email Address" />
                <button type="submit" className="input-group-text btn btn-primary">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
