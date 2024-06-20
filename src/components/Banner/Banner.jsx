import { useState } from "react";
import PropTypes from "prop-types";

const Banner = ({ donations, setFilteredDonations }) => {
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearchChange = (e) => {
    setSearchCategory(e.target.value);
  };

  const handleSearch = () => {
    const filtered = donations.filter((donation) =>
      donation.category.toLowerCase().includes(searchCategory.toLowerCase())
    );
    setFilteredDonations(filtered);
  };

  return (
    <div className="relative bg-gray-50 h-80 flex justify-center items-center rounded-b-xl">
      <img
        src="/src/assets/Resources/Clothing.png"
        alt="Overly"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-black">
          I Grow By Helping People In Need
        </h1>
        <div className="flex justify-center items-center">
          <input
            type="text"
            value={searchCategory}
            onChange={handleSearchChange}
            className="border border-gray-300 bg-white text-black rounded-l-md p-2 focus:outline-none w-80"
            placeholder="Search"
            aria-label="search category"
          />

          <button
            onClick={handleSearch}
            className="border border-orange-600 bg-orange-700 text-white p-2 rounded-r-md"
            aria-label="search button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  donations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      card_bg: PropTypes.string,
      text_color: PropTypes.string,
      button_bg: PropTypes.string,
    })
  ).isRequired,
  setFilteredDonations: PropTypes.func.isRequired,
};

export default Banner;
