import Link from 'next/link';
import { TfiClose, TfiMenu, TfiSearch } from 'react-icons/tfi';
import Image from 'next/image';
import { DropdownMenu } from '@/components/DropdownMenu';
import { Icon } from '@/components/Icon';
import { IconLink } from '@/models';

export type NavigationItem = {
  title: string;
  url: string;
  submenu?: {
    title: string;
    url: string;
  }[];
};

export type NavigationProps = {
  items: NavigationItem[];
  socialLinks: IconLink[];
};

export const Navigation = (props: NavigationProps) => {
  return (
    <>
      {/* navigation */}
      <header className="navigation">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-white bg-transparent border-bottom ps-0">
            <Link className="navbar-brand mobile-view" href="/">
              <Image className="img-fluid" src="/images/logo.png" width="65" height="34" alt="Site Title" />
            </Link>
            <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navigation">
              <TfiMenu />
            </button>

            <div className="collapse navbar-collapse text-center" id="navigation">
              <div className="desktop-view">
                <ul className="navbar-nav me-auto">
                  {props.socialLinks.map(({ title, url, icon }) => (
                    <li className="nav-item" key={title}>
                      <Link className="nav-link" href={url}>
                        <Icon icon={icon} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Link className="navbar-brand mx-auto desktop-view" href="/">
                <Image className="img-fluid" src="/images/logo.png" width="65" height="34" alt="Site Title" />
              </Link>

              <ul className="navbar-nav">
                {props.items.map((menuItem) => {
                  return menuItem.submenu && menuItem.submenu.length !== 0 ? (
                    <DropdownMenu title={menuItem.title} url={menuItem.url} submenu={menuItem.submenu} />
                  ) : (
                    <li key={menuItem.title} className="nav-item">
                      <Link className="nav-link" href={menuItem.url}>
                        {menuItem.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {process.env.SEARCH_ENABLE && (
                /* search */
                <div className="search pl-lg-4">
                  <button id="searchOpen" className="search-btn" type="button">
                    <TfiSearch />
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
                      <TfiClose className="text-dark" />
                    </button>
                  </div>
                </div>
              )}

              {process.env.NAV_BUTTON_ENABLE && (
                /* get start btn */
                <Link href="/" className="btn btn-primary ms-lg-4" type="button">
                  {process.env.NAV_BUTTON_LABEL}
                </Link>
              )}
            </div>
          </nav>
        </div>
      </header>
      {/* /navigation */}
    </>
  );
};
