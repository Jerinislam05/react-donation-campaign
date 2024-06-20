import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DonationCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    description,
    price,
    card_bg,
    text_color,
    category,
  } = donation;
  return (
    <>
      <div
        key={id}
        className="w-full shadow-2xl rounded-xl p-4 mb-4 flex"
        style={{ backgroundColor: card_bg }}
      >
        <div className="w-1/3 pr-4 flex-shrink-0 flex items-center">
          <img
            className="w-full h-full object-cover rounded-md"
            src={picture}
            alt={title}
          />
        </div>
        <div
          className="w-2/3 pl-4 text-black flex flex-col justify-between"
          style={{ height: "100%" }}
        >
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="mb-2">{description}</p>
          <p className="text-lg mb-2" style={{ color: text_color }}>
            Category: {category}
          </p>
          <p className="text-lg mb-4" style={{ color: text_color }}>
            Price: ${price}
          </p>
          <Link to={`/donate/${id}`}>
            <button
              className="px-4 py-2 rounded-md text-white"
              style={{ backgroundColor: text_color, color: "white" }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    card_bg: PropTypes.string,
    text_color: PropTypes.string,
    button_bg: PropTypes.string,
  }).isRequired,
};

export default DonationCard;
