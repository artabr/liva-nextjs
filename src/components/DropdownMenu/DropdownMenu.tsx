'use client';

import Link from 'next/link';
import { useState } from 'react';
import cx from 'clsx';

export type DropdownMenuProps = {
  title: string;
  url: string;
  submenu: {
    title: string;
    url: string;
  }[];
};

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { title, url, submenu } = props;
  const [open, setOpen] = useState(false);

  return (
    <li key={title} className={cx('nav-item', 'dropdown', { show: open })}>
      <div
        className="nav-link dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => setOpen(!open)}
      >
        {title}
      </div>
      <div className={cx('dropdown-menu', { show: open })}>
        {submenu.map((subMenuItem) => (
          <Link className="dropdown-item" href={subMenuItem.url} key={subMenuItem.title}>
            {subMenuItem.title}
          </Link>
        ))}
      </div>
    </li>
  );
};
