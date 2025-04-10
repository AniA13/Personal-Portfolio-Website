'use client';
import Image from "next/image";

interface FileProps {
  name: string;
  type: 'pdf' | 'txt' | 'docx' | 'mp3' | 'image';
  imageSrc?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function File({ name, type, imageSrc, isSelected, onClick }: FileProps) {
  const getFileIcon = () => {
    switch (type) {
      case 'pdf':
        return "/pdficon.png";
      case 'txt':
        return "/file_icons/txt_icon.png";
      case 'docx':
        return "/file_icons/word_icon.png";
      case 'mp3':
        return "/file_icons/music_icon.png";
      case 'image':
        return imageSrc || "/file_icons/image_icon.png";
      default:
        return "/file_icons/default_icon.png";
    }
  };

  return (
    <div 
      className={`file-item flex flex-col items-center w-24 cursor-pointer p-2 rounded
        ${isSelected ? 'bg-blue-100' : 'hover:bg-blue-50'}`}
      onClick={onClick}
    >
      <div className="w-12 h-12 relative mb-1">
        <Image
          src={getFileIcon()}
          alt={`${name} icon`}
          fill
          style={{ objectFit: type === 'image' ? 'cover' : 'contain' }}
          draggable={false}
        />
      </div>
      <span className="text-sm text-center break-words w-full">
        {name}
      </span>
    </div>
  );
}
