'use client';
import Image from "next/image";
import File from "./File";

interface FileExplorerProps {
  isOpen: boolean;
  onClose: () => void;
  folderName: string;
  folderId: string;
}

export default function FileExplorer({ isOpen, onClose, folderName, folderId }: FileExplorerProps) {
  if (!isOpen) return null;

  const getFolderContent = () => {
    switch (folderId) {
      case 'projects':
        return (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-2">
            <File 
              name="Chess With Python" 
              type="image" 
              imageSrc="/ChessWithPythonIcon.png"
            />
            <File 
              name="NC State Hackathon 25" 
              type="image" 
              imageSrc="/HackNcState25.png"
            />
          </div>
        );
      case 'music':
        return (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-2">
            <File name="Placeholder Song.mp3" type="mp3" />
          </div>
        );
      default:
        return <p>No content available</p>;
    }
  };

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
      <div className="p-4">
        {getFolderContent()}
      </div>
    </div>
  );
}





