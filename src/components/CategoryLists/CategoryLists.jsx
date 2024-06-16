import { useEffect, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";

const CategoryLists = ({ donations }) => {
  const [categoryLists, setCategoryLists] = useState([]);
  const [groupedCategories, setGroupedCategories] = useState([]);

  useEffect(() => {
    fetch("../donation.json")
      .then((res) => res.json())
      .then((data) => {
        setCategoryLists(data);
        setGroupedCategories(groupDataByCategory(data));
      });
  }, []);

  const groupDataByCategory = (data) => {
    const categories = ["Food", "Clothing", "Health", "Education"];
    let grouped = { Food: [], Clothing: [], Health: [], Education: [] };

    data.forEach((item) => {
      if (categories.includes(item.category)) {
        grouped[item.category].push(item);
      }
    });

    let rows = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      categories.forEach((category) => {
        if (grouped[category].length) {
          row.push(grouped[category].shift());
        }
      });
      rows.push(row);
    }

    return rows;
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="mt-6 text-black text-2xl text-center font-bold">
        Donation Category Lists: {categoryLists.length}
      </h2>
      {groupedCategories.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4"
        >
          {row.map((categoryList) => (
            <CategoryList key={categoryList.id} categoryList={categoryList} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoryLists;
