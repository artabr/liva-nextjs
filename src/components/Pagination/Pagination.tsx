import Link from 'next/link';
import { getPageLink, getPageNumbers } from '@/lib/utils';
import { ensureLeadingSlash } from 'next/dist/shared/lib/page-path/ensure-leading-slash';
import cx from 'clsx';

export type PaginationProps = {
  itemsNumber: number;
  parentPath?: string;
  currentPage?: number;
};

const getPaginationLink = (parentFolder: string, page: string | number) => {
  const pageString = typeof page === 'number' ? page.toString() : page;

  const parentPath = parentFolder === '' ? '/' : ensureLeadingSlash(parentFolder);

  if (pageString === '1') return parentPath;

  return `${parentPath}${getPageLink(pageString)}`;
};

export const Pagination = ({ itemsNumber, parentPath = '', currentPage = 1 }: PaginationProps) => {
  const pages = getPageNumbers(itemsNumber);
  const pagesNumber = pages.length;

  return (
    <ul className="pagination pagination-default">
      {currentPage !== 1 && (
        <>
          <li className="page-item">
            <Link href={getPaginationLink(parentPath, 1)} aria-label="First" className="page-link" role="button">
              <span aria-hidden="true">««</span>
            </Link>
          </li>
          <li className="page-item">
            <Link
              href={getPaginationLink(parentPath, currentPage - 1)}
              aria-label="Previous"
              className="page-link"
              role="button"
            >
              <span aria-hidden="true">«</span>
            </Link>
          </li>
        </>
      )}
      {pages.map((page) => (
        <li key={page} className={cx('page-item', { active: currentPage.toString() === page })}>
          <Link href={getPaginationLink(parentPath, page)} aria-label={page} className="page-link" role="button">
            {page}
          </Link>
        </li>
      ))}
      {currentPage < pagesNumber && (
        <>
          <li className="page-item">
            <Link
              href={getPaginationLink(parentPath, currentPage + 1)}
              aria-label="Next"
              className="page-link"
              role="button"
            >
              <span aria-hidden="true">»</span>
            </Link>
          </li>
          <li className="page-item">
            <Link
              href={getPaginationLink(parentPath, pagesNumber)}
              aria-label="Last"
              className="page-link"
              role="button"
            >
              <span aria-hidden="true">»»</span>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};
