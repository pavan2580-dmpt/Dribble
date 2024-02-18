import React, { MouseEventHandler } from 'react'
import Image from 'next/image'


type Props = {
    title:string;
    LeftIcon?:string;
    rightIcon ?:string |null;
    handleClick?: MouseEventHandler;
    isSub?:boolean;
    type?:"button" | "submit";
    bgColor?:string;
    textColor?:string;
}


function Button({title,LeftIcon,rightIcon,bgColor,textColor,isSub,handleClick,type}:Props) {
  return (
    <button
        type={type || 'button'}
        disabled={isSub}
        className = {`flexCenter gap-3 px-4 py-3
            ${textColor ||"text-white"}
            ${isSub ? 'bg-black/50':bgColor ? bgColor:'bg-primary-purple'} rounded-xl text-sm
            font-medium max-md:w-full
        `}
        onClick={handleClick}
    >{LeftIcon && <Image src={LeftIcon} width={14}height={14} alt="left"/> }
    {title}
    {rightIcon && <Image src={rightIcon} width={14} height={14} alt='right'/> }
    
    </button>
  )
}

export default Button