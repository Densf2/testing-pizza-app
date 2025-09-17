# Firebase Storage Setup Guide

This guide will help you set up Firebase Storage for your Next.js pizza app.

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "testing-pizza-app")
4. Configure Google Analytics (optional)
5. Click "Create project"

## 2. Enable Storage

1. In your Firebase project console, go to "Storage" in the left sidebar
2. Click "Get started"
3. Choose "Start in test mode" for now (you can configure security rules later)
4. Select a location for your storage bucket
5. Click "Done"

## 3. Get Firebase Configuration

1. In your Firebase project console, click the gear icon ⚙️ and select "Project settings"
2. Scroll down to "Your apps" section
3. Click "Add app" and select the web icon `</>`
4. Register your app with a nickname (e.g., "pizza-web-app")
5. Copy the configuration object

## 4. Set Up Environment Variables

1. Create a `.env.local` file in your project root (copy from `.env.local.example`)
2. Fill in your Firebase configuration values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

## 5. Configure Storage Security Rules (Optional)

In the Firebase Console, go to Storage > Rules and update the rules based on your needs:

```javascript
// Allow read/write access for authenticated users (if you plan to add auth)
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}

// Or for public read access (be careful with this in production)
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 6. Usage Examples

### Basic Upload

```typescript
import { uploadFile } from "@/lib/storage";

const handleUpload = async (file: File) => {
  try {
    const url = await uploadFile(file, `pizza-images/${file.name}`);
    console.log("File uploaded:", url);
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
```

### Using the React Hook

```typescript
import { useFirebaseStorage } from "@/hooks/useFirebaseStorage";

function MyComponent() {
  const { upload, uploading, progress, error } = useFirebaseStorage();

  const handleUpload = async (file: File) => {
    try {
      const url = await upload(file, `pizza-images/${Date.now()}_${file.name}`);
      // Handle success
    } catch (err) {
      // Handle error
    }
  };

  return (
    <div>
      {uploading && <p>Upload progress: {progress}%</p>}
      {error && <p>Error: {error}</p>}
      {/* Your upload UI */}
    </div>
  );
}
```

### Using the ImageUpload Component

```typescript
import ImageUpload from "@/components/ImageUpload";

function PizzaForm() {
  const handleImageUpload = (url: string) => {
    console.log("Pizza image uploaded:", url);
    // Save the URL to your database or state
  };

  return (
    <div>
      <ImageUpload
        onUploadComplete={handleImageUpload}
        folder="pizza-images"
        maxSizeMB={10}
      />
    </div>
  );
}
```

## File Structure

```
src/
├── lib/
│   ├── firebase.ts          # Firebase configuration
│   └── storage.ts           # Storage utility functions
├── hooks/
│   └── useFirebaseStorage.ts # React hook for storage operations
└── components/
    └── ImageUpload.tsx      # Ready-to-use upload component
```

## Available Functions

- `uploadFile(file, path)` - Simple file upload
- `uploadFileWithProgress(file, path, onProgress)` - Upload with progress tracking
- `deleteFile(path)` - Delete a file
- `getFileURL(path)` - Get download URL
- `listFiles(path)` - List files in a directory
- `getFileMetadata(path)` - Get file metadata

## Security Best Practices

1. Always validate file types and sizes on both client and server
2. Use meaningful folder structures (e.g., `pizza-images/`, `user-avatars/`)
3. Implement proper authentication if needed
4. Consider implementing server-side upload validation
5. Set up appropriate storage rules in Firebase Console

## Environment Variables Security

- Never commit `.env.local` to version control
- Add `.env.local` to your `.gitignore` file
- Use different Firebase projects for development and production
