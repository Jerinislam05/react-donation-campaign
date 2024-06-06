import { useEffect, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";

const CategoryLists = () => {
    const [categoryLists, setCategoryLists] = useState([]);

    useEffect(()=>{
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setCategoryLists(data))
    },[])


  return (
    <div className="">
      <h2 className="mt-6 text-black text-4xl text-center font-bold">Donation Category Lists: {categoryLists.length}</h2>
      <div>
        {
            categoryLists.map(categoryList => <CategoryList key={categoryList.id} categoryList={categoryList}></CategoryList>)
        }
      </div>
    </div>
  );
};

export default CategoryLists;
