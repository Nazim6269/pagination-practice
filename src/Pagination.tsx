import "./pagination.css";

type PaginationProps = {
  totalPosts: number;
  postPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          className={page == currentPage ? "active" : ""}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === Math.ceil(totalPosts / postPerPage)}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
