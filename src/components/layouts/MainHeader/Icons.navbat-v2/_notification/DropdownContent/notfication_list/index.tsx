import React from 'react'
import { notificationsType, NotificationTypeEnum } from '..'
import Avatar from './avatar'
import HeaderNotfication from './headerNotfication'
import Message from './_Message'
import RealEstateRequest from './_RealEstateRequest'
import Advertisement from './_Advertisement'
import Financing from './_Financing'

export default function NotficationList({data , activeTab}:{activeTab?:any , data:notificationsType[]}) {
  return (
    <div className='md:px-2 px-[2px] -mt-1 w-full'>
      {data.map((notification:notificationsType , index:number) =>{
        const {accountType , backgroundColor , borderColor , category , des , icon , link , time , title , type , userName , userStatus , actions , image , content } = notification
        return (
          <div key={index} className='mb-4 mt-1 md:px-2 px-[4px]'>
              <div className=' border-b-[2px] border-b-gray-100 rounded-lg pb-2 group hover:bg-gray-100 transition-all ease-in-out duration-1000'>
                <div className='flex justify-start items-center gap-2'>
                <Avatar image={image} bg={backgroundColor} state={userStatus}/>
                <div className='w-full'>
                  <HeaderNotfication title={title} time={time} />
                  <h1 className='md:text-[12px] text-[9px] text-dis mx-2'> <small>من</small> <small className='font-bold md:text-[12px] text-[10px] text-bl'>{userName}</small> {des}</h1>
                </div>
                </div>
                <div className='md:rtl:mr-10 md:ltr:ml-10 rtl:mr-4 ltr:ml-4'>
                   {type === NotificationTypeEnum.Message && <Message msg={content} link={link} />}
                   {type === NotificationTypeEnum.RealEstateRequest && <RealEstateRequest content={content} /> }
                   {type === NotificationTypeEnum.Advertisement && <Advertisement content={content} /> }
                   {type === NotificationTypeEnum.Financing && <Financing content={content} /> }
                </div>
              </div>
          </div>
        )
      })}
    </div>
  )
}
