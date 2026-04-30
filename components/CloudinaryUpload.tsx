"use client";

import { CldUploadWidget } from "next-cloudinary";
import { UploadCloud } from "lucide-react";

interface CloudinaryUploadProps {
  onUploadSuccess: (url: string) => void;
  buttonText?: string;
}

export function CloudinaryUpload({ onUploadSuccess, buttonText = "Upload Image or Video" }: CloudinaryUploadProps) {
  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      onSuccess={(result: any) => {
        if (result.info && result.info.secure_url) {
          onUploadSuccess(result.info.secure_url);
        }
      }}
      options={{
        multiple: false,
        resourceType: "auto", // Allows both images and videos
      }}
    >
      {({ open }) => {
        return (
          <button
            onClick={() => open()}
            className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors w-full bg-transparent text-neutral-800 dark:text-neutral-200"
            type="button"
          >
            <UploadCloud className="w-5 h-5" />
            <span className="font-medium text-sm">{buttonText}</span>
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
