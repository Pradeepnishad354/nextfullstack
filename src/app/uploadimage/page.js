"use client";

import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState();


  const uploadImage= async (e)=>{

e.preventDefault()
console.log(file)

const data=new FormData()
data.set("file",file)
let result=await fetch("http://localhost:3001/api/upload",{

method:"POST",
body:data
})

result=await result.json();

console.log(result)

if(result.success){

    alert("file uploaded..")
}

  }

  return (
    <>
      <h1>Upload Images </h1>

      <div>
        <form onSubmit={uploadImage}>
          <input
            type="file"
            name="file"
            onChange={(e) =>setFile(e.target.files?.[0]) }
          ></input>
          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
}
