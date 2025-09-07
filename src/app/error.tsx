"use client"
import React from 'react';
import { ApiError } from "next/dist/server/api-utils";



interface ErrorPageProps {
    error?: Error|ApiError;
    reset?: () => void;
}
const ErrorPage = ({reset , error}:ErrorPageProps) => {
  return (
    <div className="w-screen h-screen t">
{error?.message}
    </div>
  )
}

export default ErrorPage













const NeumorphismButton = () => {
  return (
    <button
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    `}
    >
      <i className="fa-solid fa-arrow-left bg-none border p-2  rounded-full text-bl arrow" />
      <span>الرجوع الي الصفحه الرئيسيه</span>
    </button>
  );
};

