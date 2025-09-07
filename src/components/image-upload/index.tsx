"use client";

import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, X, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
  onUploadComplete: (imageUrl: string) => void;
  title?: string;
}

export function ImageUpload({
  onUploadComplete,
  title = "ارفع صورة",
}: ImageUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("الرجاء اختيار ملف صورة فقط.");
        return;
      }
      
      setSelectedFile(file);
      setUploadedImageUrl(null); 
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.warning("الرجاء اختيار صورة أولاً.");
      return;
    }

    setIsUploading(true);
    
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://192.168.8.123:7000/api/v1/files/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("حدث خطأ أثناء رفع الصورة.");
      }

      const result = await response.json();
      
      if(result.data.imageUrl) {
        setUploadedImageUrl(result.data.imageUrl);
        onUploadComplete(result.data.imageUrl); 
        toast.success("تم رفع الصورة بنجاح!");
      } else {
         throw new Error("لم يتم العثور على رابط الصورة في الاستجابة.");
      }

    } catch (error) {
      console.error("Upload Error:", error);
      toast.error(error instanceof Error ? error.message : "فشل رفع الصورة.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center w-full space-y-4">
          <Label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer border-border hover:bg-muted"
          >
            {previewUrl ? (
              <div className="relative w-full h-full">
                <Image
                  src={previewUrl}
                  alt="معاينة الصورة"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 z-10 rounded-full"
                  onClick={(e) => {
                    e.preventDefault(); 
                    handleCancel();
                  }}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : uploadedImageUrl ? (
                <div className="flex flex-col items-center justify-center text-center text-emerald-600">
                    <CheckCircle2 className="w-16 h-16 mb-2" />
                    <p className="font-semibold">تم الرفع بنجاح</p>
                    <a href={uploadedImageUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 underline mt-2">
                        عرض الصورة
                    </a>
                </div>
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">اضغط للاختيار</span> أو قم بسحب وإفلات الصورة هنا
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, GIF (بحد أقصى 5MB)
                </p>
              </div>
            )}
          </Label>
          <Input
            id="file-upload"
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleUpload} disabled={!selectedFile || isUploading}>
          {isUploading ? "جاري الرفع..." : "رفع الصورة"}
        </Button>
      </CardFooter>
    </Card>
  );
}