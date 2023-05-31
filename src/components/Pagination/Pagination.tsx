export type PaginationProps = {
  title?: string;
};

export const Pagination = (props: PaginationProps) => {
  return (
    <ul className="pagination pagination-default">
      <li className="page-item disabled">
        <a aria-disabled="true" aria-label="First" className="page-link" role="button" tabIndex="-1">
          <span aria-hidden="true">««</span>
        </a>
      </li>
      <li className="page-item disabled">
        <a aria-disabled="true" aria-label="Previous" className="page-link" role="button" tabIndex="-1">
          <span aria-hidden="true">«</span>
        </a>
      </li>
      <li className="page-item active">
        <a aria-current="page" aria-label="Page 1" className="page-link" role="button">
          1
        </a>
      </li>
      <li className="page-item">
        <a href="/liva/examplesite/page/2/" aria-label="Page 2" className="page-link" role="button">
          2
        </a>
      </li>
      <li className="page-item">
        <a href="/liva/examplesite/page/2/" aria-label="Next" className="page-link" role="button">
          <span aria-hidden="true">»</span>
        </a>
      </li>
      <li className="page-item">
        <a href="/liva/examplesite/page/2/" aria-label="Last" className="page-link" role="button">
          <span aria-hidden="true">»»</span>
        </a>
      </li>
    </ul>
  );
};
