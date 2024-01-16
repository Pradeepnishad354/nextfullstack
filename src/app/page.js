import Link from "next/link"

 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <div >
<ToastContainer></ToastContainer>
    
      <h1>Next js with mongodb</h1>
      <Link href={"/addproduct"}>Add Product</Link><br>

      </br>
      <Link href={"/products"}>ProductList</Link>
      </div>
  )
}
