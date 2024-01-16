"use client"
import { useState } from "react"
import "../style.css"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import Link from "next/link";

export default  function Page(){

    const router=useRouter();
    const[name,setName]=useState();
    const[price,setPrice]=useState();
    const[company,setCompany]=useState();
    const[color,setColor]=useState();
    const[category,setCategory]=useState();


const createProduct=async ()=>{

    let result=await fetch("http://localhost:3001/api/products",{

    method:"POST",

    body:JSON.stringify({name,price,company,color,category})

    })

  result=  await result.json()

  if(result.success){
   toast.success("Product added")
   // alert("product added ")
    router.push("/products")
  }

}

    return(
        <>
        
        <div className="container">
        <h1>Add product</h1>
           <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
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

        <button className='btn' onClick={()=>createProduct()} >Add</button>
        
        </div>
        <div className="center">
        <button ><Link   href={"/products"}>ProductList</Link></button> 
        </div>
       
        </>
       
    )
}