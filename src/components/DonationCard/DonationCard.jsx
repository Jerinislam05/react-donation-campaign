import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    description,
    price,
    category,
    card_bg,
    text_color,
    button_bg,
  } = donation;
  return (
    <>
      <div
        key={id}
        className="w-full shadow-2xl rounded-xl p-4 mb-4"
        style={{ backgroundColor: card_bg }}
      >
        <div className="flex items-start">
          <div className="w-1/3 pr-4">
            <img
              className="w-full h-40 object-cover rounded-md"
              src={picture}
              alt={title}
            />
          </div>
          <div className="w-2/3 pl-4 text-black">
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
      </div>
    </>
  );
};

export default DonationCard;
