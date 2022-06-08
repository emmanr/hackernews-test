import { usePagination, DOTS } from './usePagination';

import classes from './Pagination.module.scss';

const Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul className={classes.pagination}>
      {
        currentPage > 1 && (
          <li onClick={onPrevious}>
            <span>Previous</span>
          </li>
        )
      }
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li key="..." className={classes.dots}>&#8230;</li>;
        }

        return (
          <li key={pageNumber} className={`${classes.pages} ${currentPage === pageNumber && classes.active}`} onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        );
      })}
      {
        currentPage !== (totalCount / pageSize) && (
          <li onClick={onNext}>
            <span>Next</span>
          </li>
        )
      }
    </ul>
  );
};

export default Pagination;
