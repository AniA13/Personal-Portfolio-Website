'use client';
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import FileExplorer from "./components/FileExplorer";
import FolderIcon from "./components/FolderIcon";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const folders = [
    { id: 'projects', name: 'Projects' },
    //{ id: 'music', name: 'Music' },
    // Add more folders as needed
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle click outside to deselect
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Only deselect if explorer is closed and we click outside a folder icon
      if (!isExplorerOpen && !target.closest('.folder-icon')) {
        setSelectedFolderId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isExplorerOpen]);

  const selectedFolder = folders.find(folder => folder.id === selectedFolderId);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <main 
          className="h-screen w-screen p-4 font-['Tahoma']"
          style={{
            backgroundImage: 'url("/windows_homescreen.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Desktop Icons Grid */}
          <div className="flex h-full w-full items-center justify-center">
          <div className="grid grid-flow-col auto-cols-[8rem] gap-4 p-4 justify-center">
            {folders.map(folder => (
              <FolderIcon
                key={folder.id}
                name={folder.name}
                isSelected={selectedFolderId === folder.id}
                onSelect={() => setSelectedFolderId(folder.id)}
                onDoubleClick={() => {
                  setSelectedFolderId(folder.id);
                  setIsExplorerOpen(true);
                }}
              />
            ))}
          </div>
          </div>

          <FileExplorer 
            isOpen={isExplorerOpen} 
            onClose={() => setIsExplorerOpen(false)}
            folderName={selectedFolder?.name || ''}
            folderId={selectedFolder?.id || ''}
          />
        </main>
      )}
    </>
  );
}




