"use client"
import { SessionInterface } from "@/common.types"
import React, { ChangeEvent, useState } from "react"
import Image from "next/image"
import FormField from "./FormField"
import CustomMenu from "./CustomMenu"
import { categoryFilters } from "@/constants"
import Button from "./Button"

type Props = {
  type:String,
  session:SessionInterface
}

function ProjectForm({type,session}:Props) {

  const [isSub,setIsSub] = useState(false)

  const [form,setForm] = useState({
    image: "",
    title:"",
    description:'',
    liveSiteUrl:"",
    githubUrl:'',
    category:""
  })


  const handleFormSubmit = (e:React.FormEvent)=>{
      e.preventDefault();
      setIsSub(true)
      try {
        if(type === "create"){
          
        }
      } catch (error) {       
    }

   };

  const handleChangeImage = (e:ChangeEvent<HTMLInputElement>) =>{
      e.preventDefault();
      const file = e.target.files?.[0];
      if(!file)return;
      if(!file.type.includes('image')){
        return alert("Uplaod an image file")
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>{
        const result = reader.result as string;
        handleStateChange('image',result);
      }
  };

  const handleStateChange = (fieldName:string,value:string) =>{
    console.log(`Updating state for ${fieldName}: ${value}`);
    setForm((preState)=>
    ({...preState,[fieldName]:value}))
  }

 

  return (
    <form onSubmit={handleFormSubmit}
    className="flexStart form">

      <div className="flexStart  form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form.image && "choose a poster for your project"}
        </label>
        <input
          id="image"
          type="file"
          accept="image/"
          required={type === 'create'}
          className="form_image-input" 
          onChange={handleChangeImage}
          />
          {form.image && (<Image 
              src = {form?.image}
              className="sm:p-10 object-contain z-20"
              alt = "project poster"
              fill
              />
          )}
      </div>

            <FormField
              title = "Title"
              state = {form.title}
              placeholder = "Flexibble"
              setState = {(value)=>handleStateChange('title',value)}
            />
              <FormField
              title = "Description"
              state = {form.description}
              placeholder = "Showcase and discover remarlable developer projects."
              setState = {(value)=>handleStateChange('description',value)}
            /> 
             <FormField
             type="url"
            title = "Website URL"
            state = {form.liveSiteUrl}
            placeholder = "http://localhost:3000"
            setState = {(value)=>handleStateChange('liveSiteUrl',value)}
          />
            <FormField
            type="url"
              title = "gitHub URL"
              state = {form.githubUrl}
              placeholder = "https://github.com/pavan2580-dmpt/"
              setState = {(value)=>handleStateChange('githubUrl',value)}
            />
            <CustomMenu
              title ="Category"
              state = {form.category}
              filters = {categoryFilters}
              setState = {(value)=>handleStateChange('category',value)}

            />

            <div className="flexStart w-full">
            <Button
                 title={isSub
                  ? `${type === "create" ? "Creating" : "Editing"}`:
                  `${type === "create" ? "Create" :"Edit"}`
                     }
                 type="submit"
                 LeftIcon={isSub ? "" : "/plus.svg"}
                 isSub={isSub}
              />

            </div>
    </form>
  )
}

export default ProjectForm