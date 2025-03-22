import React from "react";

function Category({ proCategory, setCatName }) {

  // console.log(proCategory);

  let cat = proCategory.map((v, i) => {
    return(
    <li onClick = {()=>setCatName(v)} key = {`category-${i}`} className="bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2">
      {v}
    </li>
    )
  });

  // console.log(cat);

  return (
    <div>
      <h3 className="text-[25px] font-[500] p-[10px] text-center">
        Product Category
      </h3>
      <ul>
        {cat}
      </ul>
    </div>
  );
}

export default Category;
