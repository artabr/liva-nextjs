import { TfiEmail, TfiLocationPin, TfiMobile } from 'react-icons/tfi';
import { siteParams, taxonomies, footerMenus } from './mockData';

export const Footer = () => {
  return (
    <footer className="text-capitalize">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-5">
            <a href={process.env.BASE_URL}>
              <img src={process.env.LOGO_URL} alt={process.env.SITE_TITLE} />
            </a>
          </div>
          {(siteParams.mobile || siteParams.location || siteParams.email) && (
            <div className="col-lg-3 col-sm-6 mb-5">
              <h6 className="mb-4">Contact Me</h6>
              <ul className="list-unstyled">
                {siteParams.mobile && (
                  <li className="mb-3">
                    <a className="text-dark" href={`tel:${siteParams.mobile}`}>
                      <TfiMobile className="me-3 text-primary" />
                      {siteParams.mobile}
                    </a>
                  </li>
                )}
                {siteParams.location && (
                  <li className="mb-3">
                    <TfiLocationPin className="me-3 text-primary" />
                    {siteParams.location}
                  </li>
                )}
                {siteParams.email && (
                  <li className="mb-3">
                    <a className="text-dark" href={`mailto:${siteParams.email}`}>
                      <TfiEmail className="me-3 text-primary" />
                      {siteParams.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
          <div className="col-lg-3 col-sm-6 mb-5">
            <h6 className="mb-4">Social Contacts</h6>
            <ul className="list-unstyled">
              {siteParams.social.map((item) => (
                <li className="mb-3" key={item.id}>
                  <a className="text-dark" href={item.link}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {taxonomies.categories && Object.keys(taxonomies.categories).length !== 0 && (
            <div className="col-lg-3 col-sm-6 mb-5">
              <h6 className="mb-4">Categories</h6>
              <ul className="list-unstyled">
                {Object.entries(taxonomies.categories).map(([name]) => (
                  <li className="mb-3" key={name}>
                    <a className="text-dark" href={`categories/${name.toLowerCase()}/`}>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="col-lg-3 col-sm-6 mb-5">
            <h6 className="mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              {footerMenus.map((item) => (
                <li className="mb-3" key={item.id}>
                  <a className="text-dark" href={item.URL}>
                    {item.Name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 border-top py-4 text-center">
            | copyright © 2021 <a href="https://themefisher.com/hugo-themes/">Themefisher</a> All Rights Reserved |
            Next.js port by <a href="https://artabr.com">Art Abramov</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
