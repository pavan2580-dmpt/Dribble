import { NextResponse } from "next/server";
import {v2 as cloudniary} from "cloudinary"
cloudniary.config({
    cloud_name:"",
    api_key:'',
    api_secret:'',
    
})

export async function POST(request:Request){
    const {path} = await request.json();
    if(!path){
        return NextResponse.json(
            {message:'Iamge is missing'},
            {status:400}
        )
    }
    try{
        const options = {
            use_filename:true,
            unique_filename:false,
            overwrite:true,
            transfromation:[{width:1000,heifht:752,crop:'scale'}]
        }
    } catch (err){

    }
}