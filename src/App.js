import logo from "./logo.svg";
import "./App.css";
import Category from "./Components/Category";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./Components/ProductItem";

function App() {
  let [proCategory, setProCategory] = useState([]);
  let [finalProducts, setFinalProducts] = useState([]);
  let [catName, setCatName] = useState("");

  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes);
        setProCategory(finalRes);
      });
  };

  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes.products);
        setFinalProducts(finalRes.products);
      });
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(()=>{
    if(catName!==""){  
      // console.log("Catname is called",catName);
      axios
      .get(`https://dummyjson.com/products/category/${catName}`)
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes.products);
        setFinalProducts(finalRes.products);
      });
    }
  },[catName])

  // console.log(proCategory)
  // console.log(finalProducts);

  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[30px]">
            Our Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>
              <Category proCategory={proCategory} setCatName={setCatName}/>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {finalProducts.length >= 1 ? (
                <ProductItem finalProducts={finalProducts} />
              ) : (
                "Loading Products"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// 'https://dummyjson.com/products'
// 'https://dummyjson.com/products/category-list'
// 'https://dummyjson.com/products/category/smartphones'
