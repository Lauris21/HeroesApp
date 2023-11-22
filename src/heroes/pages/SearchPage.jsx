import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSumbit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
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
          {q === "" ? (
            <div className="alert alert-primary mt-3 animate__animated animate__fadeIn">
              Search a hero
            </div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger mt-3 animate__animated animate__fadeIn">
                Not find hero with <b>{q}</b>
              </div>
            )
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
