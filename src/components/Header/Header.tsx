import Link from 'next/link';

export const Navigation = () => {
  const socialLinks = [
    { id: 1, link: 'https://example.com/social1', icon: 'social-icon-1' },
    { id: 2, link: 'https://example.com/social2', icon: 'social-icon-2' },
    { id: 3, link: 'https://example.com/social3', icon: 'social-icon-3' }
  ];

  const mainMenus = [
    {
      id: 1,
      name: 'Menu 1',
      hasChildren: true,
      children: [
        { id: 1, name: 'Child 1', url: 'https://example.com/child1' },
        { id: 2, name: 'Child 2', url: 'https://example.com/child2' }
      ]
    },
    { id: 2, name: 'About', hasChildren: false, url: '/about' },
    { id: 3, name: 'Contact', hasChildren: false, url: '/contact' },
    { id: 4, name: 'Blog', hasChildren: false, url: '/blog' }
  ];

  return (
    <>
      {/* navigation */}
      <header className="navigation">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-white bg-transparent border-bottom pl-0">
            <a className="navbar-brand mobile-view" href={process.env.PUBLIC_URL}>
              <img className="img-fluid" src={`${process.env.PUBLIC_URL}/path/to/logo`} alt="Site Title" />
            </a>
            <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navigation">
              <i className="ti-menu" />
            </button>

            <div className="collapse navbar-collapse text-center" id="navigation">
              <div className="desktop-view">
                <ul className="navbar-nav mr-auto">
                  {socialLinks.map((social) => (
                    <li className="nav-item" key={social.id}>
                      <a className="nav-link" href={social.link}>
                        <i className={social.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <a className="navbar-brand mx-auto desktop-view" href={process.env.PUBLIC_URL}>
                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/path/to/logo`} alt="Site Title" />
              </a>

              <ul className="navbar-nav">
                {mainMenus.map((menu) => {
                  return menu.hasChildren ? (
                    <li key={menu.id} className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {menu.name}
                      </a>
                      <div className="dropdown-menu">
                        {menu.children?.map((child) => (
                          <a className="dropdown-item" href={child.url} key={child.id}>
                            {child.name}
                          </a>
                        ))}
                      </div>
                    </li>
                  ) : (
                    <li key={menu.id} className="nav-item">
                      <Link className="nav-link" href={menu.url || '/'}>
                        {menu.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {process.env.SEARCH_ENABLE && (
                /* search */
                <div className="search pl-lg-4">
                  <button id="searchOpen" className="search-btn" type="button">
                    <i className="ti-search" />
                  </button>
                  <div className="search-wrapper">
                    <form action={`${process.env.PUBLIC_URL}/search`} className="h-100">
                      <input
                        className="search-box px-4"
                        id="search-query"
                        name="s"
                        type="search"
                        placeholder="Type & Hit Enter..."
                      />
                    </form>
                    <button id="searchClose" className="search-close" type="button">
                      <i className="ti-close text-dark" />
                    </button>
                  </div>
                </div>
              )}

              {process.env.NAV_BUTTON_ENABLE && (
                /* get start btn */
                <a href={process.env.NAV_BUTTON_LINK} className="btn btn-primary ml-lg-4" type="button">
                  {process.env.NAV_BUTTON_LABEL}
                </a>
              )}
            </div>
          </nav>
        </div>
      </header>
      {/* /navigation */}
    </>
  );
};
