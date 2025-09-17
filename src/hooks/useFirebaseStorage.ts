"use client";

import { useState } from "react";
import { uploadFileWithProgress, deleteFile } from "../lib/storage";

interface UseFirebaseStorageResult {
  upload: (file: File, path: string) => Promise<string>;
  remove: (path: string) => Promise<void>;
  uploading: boolean;
  progress: number;
  error: string | null;
}

export const useFirebaseStorage = (): UseFirebaseStorageResult => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const upload = async (file: File, path: string): Promise<string> => {
    setUploading(true);
    setProgress(0);
    setError(null);

    try {
      const downloadURL = await uploadFileWithProgress(
        file,
        path,
        (progressPercent) => setProgress(progressPercent)
      );

      setUploading(false);
      setProgress(100);
      return downloadURL;
    } catch (err) {
      setUploading(false);
      setProgress(0);
      setError(err instanceof Error ? err.message : "Upload failed");
      throw err;
    }
  };

  const remove = async (path: string): Promise<void> => {
    setError(null);
    try {
      await deleteFile(path);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
      throw err;
    }
  };

  return {
    upload,
    remove,
    uploading,
    progress,
    error,
  };
};
