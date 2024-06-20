import { useEffect, useState } from "react";
import { getDonation } from "../../localStorage";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const storedDonations = getDonation();
    setDonations(storedDonations);
  }, []);

  const displayedDonations = showAll ? donations : donations.slice(0, 4);

  return (
    <>
      <div className="container mx-auto py-10">
        <h2 className="mt-6 text-black text-2xl text-center font-bold">
          Your Donations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          {displayedDonations.map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </div>
        {donations.length > 4 && !showAll && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="px-4 py-2 rounded-md text-white"
              style={{ backgroundColor: "#3498db" }}
            >
              See All
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Donation;
