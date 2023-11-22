import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSumbit = (event) => {
    event.preventDefault();
    if (searchText.trim().length < 1) {
      return;
    }
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };
  return (
    <>
      <h1 className="mt-3 border-bottom border-secondary-subtle p-2">Search</h1>
      <div className="row">
        <div className="col-5">
          <h4 className="mt-3">Searching</h4>
          <form onSubmit={onSearchSumbit}>
            <input
              type="text"
              placeholder="search a hero"
              className="form-control mt-3"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4 className="mt-3">Results</h4>
          <div className="alert alert-primary mt-3">Search a hero</div>
          <div className="alert alert-danger mt-3">
            Not find hero with <b>{q}</b>
          </div>
        </div>
      </div>
    </>
  );
};
