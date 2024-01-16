import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


//get product
export async function GET() {

  let data = [];
  let success=true;
  try {
    await mongoose.connect(connectionStr);

    data = await Product.find();
   console.log(data);
  } catch (error) {
    data={result:"error"}
    success=false
    
  }


  return NextResponse.json({ result: data ,success});

}

// create product

export async function POST(request){
 let payLoad=   await request.json()

    await mongoose.connect(connectionStr)

    let product=new Product(payLoad);

    const result=await product.save();

    return NextResponse.json({result,success:true})

}
