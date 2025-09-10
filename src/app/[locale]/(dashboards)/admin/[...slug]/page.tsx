import React from 'react'

export default async function DynamicPage({ params }: { params: { slug?: string[] } }) {
  
  const { slug } = await params; 
  
  const pathSegments = slug || [];

  console.log("المسار المستخرج:", pathSegments);

  return (
    <div>
      <h1>المسار الحالي: {pathSegments.join('-')}</h1>
    </div>
  )
}

