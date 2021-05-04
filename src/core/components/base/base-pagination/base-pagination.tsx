import ReactPaginate from 'react-paginate';
import clsx from 'clsx';
import './base-pagination.scss';

type BasePaginationProps = {
  pageCount: number;
  currentPage: number;
  onChange: (page: number) => void;
};

export function BasePagination({
  pageCount,
  currentPage,
  onChange,
}: BasePaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={({ selected }) => {
        onChange(selected + 1);
      }}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      containerClassName={clsx('pagination', !pageCount && 'pagination--empty')}
      activeLinkClassName="pagination__link--active"
      pageLinkClassName="pagination__link"
      previousLinkClassName="pagination__link pagination__link--previous"
      nextLinkClassName="pagination__link pagination__link--next"
      pageClassName="pagination__page"
      breakLinkClassName="pagination__link pagination__link--break"
      nextClassName="pagination__page"
      previousClassName="pagination__page"
      breakClassName="pagination__page"
    />
  );
}
