import { useNavigate } from "react-router-dom";

const CategoryList = ({ categoryList }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_color,
    button_bg,
    description,
    price,
  } = categoryList;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/donate/${id}`);
  };

  return (
    // <Link to={`/donate/${id}`}>
      <div
        onClick={handleClick}
        className="w-full shadow-2xl p-4 rounded-xl"
        style={{ backgroundColor: card_bg }}
      >
        <figure>
          <img
            className="w-full h-40 object-cover mb-4 rounded-md"
            src={picture}
            alt=""
          />
        </figure>
        <button
          className="w-full px-4 rounded-xl"
          style={{ backgroundColor: category_bg, color: text_color }}
        >
          {category}
        </button>
        <div className="text-center">
          <h3 className="mt-4 text-xl font-bold" style={{ color: text_color }}>
            {title}
          </h3>
        </div>
      </div>
    // </Link>
  );
};

export default CategoryList;
