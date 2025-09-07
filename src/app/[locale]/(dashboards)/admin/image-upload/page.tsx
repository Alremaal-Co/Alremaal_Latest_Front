"use client"
import { ImageUpload } from '@/components/image-upload'
import React, { useState } from 'react'

export default function ImageUploadPage() {
    const [uploadedUrl, setUploadedUrl] = useState<string>('');

  const handleUploadFinished = (imageUrl: string) => {
    setUploadedUrl(imageUrl);
  };
  return (
  <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <div className="w-full max-w-lg">
        <ImageUpload onUploadComplete={handleUploadFinished} />

        {uploadedUrl && (
          <div className="mt-8 p-4 border rounded-md bg-muted">
            <p className="text-sm font-medium">رابط الصورة التي تم رفعها:</p>
            <a 
              href={uploadedUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 break-all hover:underline"
            >
              {uploadedUrl}
            </a>
          </div>
        )}
      </div>
    </main>
  )
}
