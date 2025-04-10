'use client';
import Image from "next/image";
import File from "./File";
import PreviewSection from "./PreviewSection";
import { useState, useEffect } from "react";
import { getFileDetails, folderContents, FileDetails } from "../data/fileDetails";

interface FileExplorerProps {
  isOpen: boolean;
  onClose: () => void;
  folderName: string;
  folderId: string;
}

export default function FileExplorer({ isOpen, onClose, folderName, folderId }: FileExplorerProps) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Only deselect if we click outside both the file-item and preview-section
      if (!target.closest('.file-item') && !target.closest('.preview-section')) {
        setSelectedFile(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const getFolderContent = () => {
    const content = folderContents[folderId];
    
    if (!content) {
      return <p>No content available</p>;
    }

    return (
      <div className="grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-2">
        {content.map(file => (
          <File 
            key={file.name}
            name={file.name}
            type={file.type}
            imageSrc={file.imageSrc}
            isSelected={selectedFile === file.name}
            onClick={() => setSelectedFile(file.name)}
          />
        ))}
      </div>
    );
  };

  const currentFileDetails = getFileDetails(selectedFile);

  return (
    <div 
      className={`file-explorer fixed inset-4 bg-white rounded-lg shadow-xl transform transition-all duration-300 ease-out
        ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      style={{
        border: '1px solid #0055EA',
      }}
    >
      {/* Window Title Bar */}
      <div className="h-8 bg-gradient-to-r from-[#0055EA] to-[#2B8AFF] flex items-center justify-between px-2 rounded-t-lg">
        <div className="flex items-center">
          <Image
            src="/windowsxp_folder_icon.png"
            alt="Folder"
            width={16}
            height={16}
            className="mr-2"
          />
          <span className="text-white">{folderName}</span>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:bg-red-500 px-2 rounded"
        >
          ✕
        </button>
      </div>
      
      {/* Window Content */}
      <div className="flex flex-col md:flex-row h-[calc(100%-2rem)]">
        {/* Files Grid Section */}
        <div className="flex-1 p-4 overflow-auto border-b md:border-b-0 md:border-r border-gray-200">
          {getFolderContent()}
        </div>

        {/* Preview Section */}
        <PreviewSection 
          selectedFile={selectedFile}
          fileDetails={currentFileDetails}
        />
      </div>
    </div>
  );
}





