'use client';
import Image from "next/image";

interface FileDetails {
  title: string;
  description: string;
  imageSrc: string;
  url?: string;
}

interface PreviewSectionProps {
  selectedFile: string | null;
  fileDetails: FileDetails;
}

export default function PreviewSection({ selectedFile, fileDetails }: PreviewSectionProps) {
  return (
    <div className="preview-section w-full md:w-80 p-4 bg-gray-50 overflow-y-auto">
      {selectedFile ? (
        <div className="space-y-4">
          {/* Preview Image with 3D rotation */}
          {fileDetails.imageSrc && (
            <div className="relative h-48 w-full bg-white rounded-lg shadow-sm perspective-1000 flex items-center justify-center">
              <div className="relative h-[80%] w-[80%] transform-style-3d rotate-3d">
                <Image
                  src={fileDetails.imageSrc}
                  alt="Preview"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="font-bold text-lg mb-2">
              {fileDetails.url ? (
                <a 
                  href={fileDetails.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {fileDetails.title}
                </a>
              ) : (
                fileDetails.title
              )}
            </h3>
            <p className="text-sm text-gray-600 whitespace-pre-line">
              {fileDetails.description}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Select a file to view details</p>
      )}
    </div>
  );
}




