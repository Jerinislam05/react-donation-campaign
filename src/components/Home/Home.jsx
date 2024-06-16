import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import CategoryLists from "../CategoryLists/CategoryLists";

const Home = () => {
  const [donations, setDonations] = useState([]);
  const [filteredDonations, setFilteredDonations] = useState([]);

  useEffect(() => {
    fetch("../donations.json")
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setFilteredDonations(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Banner
        donations={donations}
        setFilteredDonations={setFilteredDonations}
      ></Banner>
      <CategoryLists donations={filteredDonations}></CategoryLists>
    </div>
  );
};

export default Home;
