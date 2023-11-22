import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  const charactersByHero = <p>{characters}</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={heroImageUrl}
              alt={superhero}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h4 className="card-title">{superhero}</h4>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && charactersByHero}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  //   publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
