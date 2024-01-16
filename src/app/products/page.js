"use client";
import "../style.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import DeleteProduct from "@/lib/DeleteProduct";
// const productList = async () => {

//     let data = await fetch("http://localhost:3001/api/products");

//   data = await data.json();

//   if(data.success){

//     return data.result;

//   }else{

//     return {success:false}
//   }

// };

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);
  const getProductList = async () => {
    let data = await fetch("http://localhost:3001/api/products",{cache:"no-cache"});

    data = await data.json();
    console.log(data);
    setProducts(data.result);

    console.log("=======", products);
  };

  return (
    <>
      <h2 style={{textAlign:'center'}}>Product List</h2>
      <table>
        <thead >
          <tr >
            <td className="black">Name</td>
            <td className="black">Price</td>
           
           
            <td className="black"> Color</td>
            <td className="black">Comapny</td>
            <td className="black">Category</td>
            <td className="black">Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.color}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
              <td ><button className="buttonstyle"><Link href={"products/"+item._id}>Edit</Link></button>
              <DeleteProduct id={item._id} ></DeleteProduct></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
