'use client';
import Image from "next/image";
import { useState, useCallback } from "react";

interface FolderIconProps {
  name: string;
  isSelected: boolean;
  onSelect: () => void;
  onDoubleClick: () => void;
}

export default function FolderIcon({ name, isSelected, onSelect, onDoubleClick }: FolderIconProps) {
  const [lastTapTime, setLastTapTime] = useState<number>(0);

  const handleTouch = useCallback((e: React.TouchEvent) => {
    e.preventDefault(); // Prevent default touch behavior
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapTime;

    if (tapLength < 300 && tapLength > 0) {
      onDoubleClick();
    } else {
      onSelect();
    }

    setLastTapTime(currentTime);
  }, [lastTapTime, onSelect, onDoubleClick]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastTapTime;

    if (timeDiff < 250) {
      onDoubleClick();
    } else {
      onSelect();
    }
    
    setLastTapTime(currentTime);
  }, [lastTapTime, onSelect, onDoubleClick]);

  return (
    <div 
      className="folder-icon select-none cursor-pointer flex flex-col items-center p-2 rounded"
      onClick={handleClick}
      onTouchStart={handleTouch}
      style={{
        backgroundColor: isSelected ? 'rgba(173, 216, 230, 0.3)' : 'transparent',
      }}
    >
      <div className="w-16 h-16 relative mb-1">
        <Image
          src="/windowsxp_folder_icon.png"
          alt={name}
          fill
          style={{ objectFit: 'contain' }}
          draggable={false}
        />
      </div>
      <span className="text-white text-lg text-center font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
        {name}
      </span>
    </div>
  );
}



