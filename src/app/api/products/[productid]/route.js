import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  
  // console.log(content)

  let productId = content.params.productid;

  const filter = { _id: productId };

  let payLoad = await request.json();
  console.log(payLoad);

  await mongoose.connect(connectionStr);
  const result = await Product.findOneAndUpdate(filter, payLoad);

  return NextResponse.json({ result, success: true });
}


// get single product

export async function GET(request, content) {
  
    // console.log(content)
  
    let productId = content.params.productid;
  
    const single = { _id: productId };
  
   
    await mongoose.connect(connectionStr);
    const result = await Product.findById(single);
  
    return NextResponse.json({ result, success: true });
}


//delete data

export async function DELETE(request, content) {
  
    // console.log(content)
  
    let productId = content.params.productid;
  
    const single = { _id: productId };
  
   
    await mongoose.connect(connectionStr);
    const result = await Product.deleteOne(single);
  
    return NextResponse.json({ result, success: true });
}