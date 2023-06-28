import { TfiEmail, TfiLocationPin, TfiMobile } from 'react-icons/tfi';
import Link from 'next/link';
import Image from 'next/image';
import { siteParams, taxonomies, footerMenus } from './mockData';

export const Footer = () => {
  return (
    <footer className="text-capitalize">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-5">
            <Link href="/">
              <Image src="/images/logo.png" width="65" height="34" alt="Site Title" />
            </Link>
          </div>
          {(siteParams.mobile || siteParams.location || siteParams.email) && (
            <div className="col-lg-3 col-sm-6 mb-5">
              <h6 className="mb-4">Contact Me</h6>
              <ul className="list-unstyled">
                {siteParams.mobile && (
                  <li className="mb-3">
                    <Link className="text-dark" href={`tel:${siteParams.mobile}`}>
                      <TfiMobile className="me-3 text-primary" />
                      {siteParams.mobile}
                    </Link>
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
                    <Link className="text-dark" href={`mailto:${siteParams.email}`}>
                      <TfiEmail className="me-3 text-primary" />
                      {siteParams.email}
                    </Link>
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
                  <Link className="text-dark" href={item.link}>
                    {item.title}
                  </Link>
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
                    <Link className="text-dark" href={`categories/${name.toLowerCase()}/`}>
                      {name}
                    </Link>
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
                  <Link className="text-dark" href={item.URL}>
                    {item.Name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 border-top py-4 text-center">
            | copyright © 2021 <Link href="https://themefisher.com/hugo-themes/">Themefisher</Link> All Rights Reserved
            | Next.js port by <Link href="https://artabr.com">Art Abramov</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
