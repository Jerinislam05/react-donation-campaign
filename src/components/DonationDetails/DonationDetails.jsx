import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonation } from "../../localStorage";
import PropTypes from "prop-types";

const DonationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState();

  useEffect(() => {
    fetch("../donation.json")
      .then((res) => res.json())
      .then((data) => {
        const idInt = parseInt(id);
        const details = data.find((item) => item.id === idInt);
        setCardDetails(details);
      });
  }, [id]);

  if (!cardDetails) {
    return <div>Loading..</div>;
  }
  const { picture, title, description, price, text_color } = cardDetails;

  const handleDonate = () => {
    toast.success("donation received!", {
      position: "top-center",
    });
    saveDonation(cardDetails);

    setTimeout(() => {
      navigate("/donation");
    }, 1000);
  };

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="relative w-full shadow-2xl rounded-xl">
          <figure className="relative">
            <img
              className="w-full h-80 object-cover mb-4 rounded-md"
              src={picture}
              alt={title}
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 rounded-b-md p-4">
              <div>
                <button
                  onClick={handleDonate}
                  className="px-4 py-2 rounded-md text-white"
                  style={{ backgroundColor: text_color, color: "white" }}
                >
                  Donate ${price}
                </button>
              </div>
            </div>
          </figure>
          <div className="p-4 text-black">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-2">{description}</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

DonationDetails.propTypes = {
  cardDetails: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default DonationDetails;
