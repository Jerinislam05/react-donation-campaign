const CategoryList = ({ categoryList }) => {
  const {
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
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body"></div>
      <figure>
        <img
          src={picture}
          alt={title}
        />
        <p><span>{category}</span></p>
      </figure>
    </div>
  );
};

export default CategoryList;
