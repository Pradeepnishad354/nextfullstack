import { NextResponse } from "next/server";
import {writeFile} from "fs/promises"
export async function POST(request){

 const data= await request.formData();
   
const file=data.get("file")

if(!file){

    return NextResponse.json({"message":"image not found",success:false})
}

const byteData=await file.arrayBuffer();

const buffer=Buffer.from(byteData);
const path=`./public/${file.name}`

await writeFile(path,buffer)

return NextResponse.json({"message":"image uploaded.." ,success:true})
}