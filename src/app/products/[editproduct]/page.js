"use client"
import { useEffect, useState } from "react"
import "../../style.css"
import Link  from "next/link";
export default  function Page(props){

    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[company,setCompany]=useState("");
    const[color,setColor]=useState("");
    const[category,setCategory]=useState("");

    useEffect(()=>{

       
        getProductDetails()

    },[])


const getProductDetails= async ()=>{
  let  productId=props.params.editproduct

    let productData= await fetch("http://localhost:3001/api/products/"+productId)

    productData= await productData.json();
//   console.log(productData)

  if(productData.success){
    setName(productData.result.name)
    setPrice(productData.result.price)
    setColor(productData.result.color)
    setCompany(productData.result.company)
     setCategory(productData.result.category)
  
  }

 
}


// update 
const updateProduct=async ()=>{

    let  productId=props.params.editproduct

    let data=await fetch("http://localhost:3001/api/products/"+productId,{

    method:"PUT",
    body:JSON.stringify({name,price,color,company,category})
    })

    data= await data.json();

    console.log(data)
if(data.result){

    alert("data update successfully")
}


}


    return(
        <>
        <div className="container">
        <h1>Update product</h1>
           <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" value={name} name="name" onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label for="age">Price:</label>
            <input type="text" id="age" value={price}   onChange={(e)=>setPrice(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label for="email">Company:</label>
            <input type="email" id="password" value={company}  onChange={(e)=>setCompany(e.target.value)} required/>
        </div>

        <div className="form-group">
            <label for="email">Color:</label>
            <input type="email" id="password"  value={color} onChange={(e)=>setColor(e.target.value)} required/>
        </div>

        <div className="form-group">
            <label for="email">Category:</label>
            <input type="email" id="password"  value={category}  onChange={(e)=>setCategory(e.target.value)} required/>
        </div>

        <button className='btn' onClick={()=>updateProduct()} >Update</button>
        <button><Link href={"/products"}>Go TO ProductList</Link></button>
        
        </div>
        </>
       
    )
}