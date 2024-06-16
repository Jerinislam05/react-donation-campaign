const getDonation = () => {
  const storedDonation = localStorage.getItem("donation");
  if (storedDonation) {
    return JSON.parse(storedDonation);
  }
  return [];
};

const saveDonation = (donation) => {
  const storedDonation = getDonation();
  const exists = storedDonation.find((d) => d.id === donation.id);
  if (!exists) {
    storedDonation.push(donation);
    localStorage.setItem("donation", JSON.stringify(storedDonation));
  }
};
export { getDonation, saveDonation };
