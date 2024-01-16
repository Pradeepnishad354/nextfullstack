"use client"
//import { useRouter } from "next/navigation";

export default  function DeleteProduct(props){

    // const router=useRouter();
    // let id=props.id;
    // console.log(id)


const deleteProduct=async ()=>{
    
    let response=await fetch("http://localhost:3001/api/products/"+props.id,{

    method:"DELETE"
    })

   response= await response.json()

   if(response.success){
    
    alert("Product deleted")
    //router.push('/products',{ scroll: true });
  window.location.reload();
   }
}


    return(
        <>
            <button onClick={deleteProduct}>Delete</button>
        </>
    )
}