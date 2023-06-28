import Link from 'next/link';

export type PaginationProps = {
  title?: string;
};

export const Pagination = (props: PaginationProps) => {
  return (
    <ul className="pagination pagination-default">
      <li className="page-item disabled">
        <Link href="/" aria-disabled="true" aria-label="First" className="page-link" role="button" tabIndex={-1}>
          <span aria-hidden="true">««</span>
        </Link>
      </li>
      <li className="page-item disabled">
        <Link href="/" aria-disabled="true" aria-label="Previous" className="page-link" role="button" tabIndex={-1}>
          <span aria-hidden="true">«</span>
        </Link>
      </li>
      <li className="page-item active">
        <Link href="/" aria-current="page" aria-label="Page 1" className="page-link" role="button">
          1
        </Link>
      </li>
      <li className="page-item">
        <Link href="/liva/examplesite/page/2/" aria-label="Page 2" className="page-link" role="button">
          2
        </Link>
      </li>
      <li className="page-item">
        <Link href="/liva/examplesite/page/2/" aria-label="Next" className="page-link" role="button">
          <span aria-hidden="true">»</span>
        </Link>
      </li>
      <li className="page-item">
        <Link href="/liva/examplesite/page/2/" aria-label="Last" className="page-link" role="button">
          <span aria-hidden="true">»»</span>
        </Link>
      </li>
    </ul>
  );
};
