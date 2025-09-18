"use client";

import { useState } from "react";
import { useFirebaseStorage } from "../hooks/useFirebaseStorage";

interface ImageUploadProps {
  onUploadComplete?: (url: string) => void;
  maxSizeMB?: number;
  acceptedTypes?: string[];
  folder?: string;
}

export default function ImageUpload({
  onUploadComplete,
  maxSizeMB = 5,
  acceptedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"],
  folder = "images",
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { upload, uploading, progress, error } = useFirebaseStorage();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!acceptedTypes.includes(file.type)) {
      alert(`Please select a valid image file (${acceptedTypes.join(", ")})`);
      return;
    }

    // Validate file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(`File size must be less than ${maxSizeMB}MB`);
      return;
    }

    setSelectedFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      // Create unique filename with timestamp
      const timestamp = Date.now();
      const fileName = `${timestamp}_${selectedFile.name}`;
      const filePath = `${folder}/${fileName}`;

      const downloadURL = await upload(selectedFile, filePath);

      if (onUploadComplete) {
        onUploadComplete(downloadURL);
      }

      // Reset form
      setSelectedFile(null);
      setPreview(null);

      alert("Image uploaded successfully!");
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const resetSelection = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Upload Image</h3>

      {/* File Input */}
      <div className="mb-4">
        <input
          type="file"
          accept={acceptedTypes.join(",")}
          onChange={handleFileSelect}
          disabled={uploading}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50"
        />
      </div>

      {/* Preview */}
      {preview && (
        <div className="mb-4">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg border"
          />
        </div>
      )}

      {/* Upload Progress */}
      {uploading && (
        <div className="mb-4">
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Uploading... {Math.round(progress)}%
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2">
        {selectedFile && !uploading && (
          <button
            onClick={handleUpload}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Upload Image
          </button>
        )}

        {selectedFile && (
          <button
            onClick={resetSelection}
            disabled={uploading}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Info */}
      <p className="text-xs text-gray-500 mt-2">
        Max file size: {maxSizeMB}MB. Accepted formats:{" "}
        {acceptedTypes
          .map((type) => type.split("/")[1])
          .join(", ")
          .toUpperCase()}
      </p>
    </div>
  );
}
