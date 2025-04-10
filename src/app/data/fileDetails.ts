export interface FileDetails {
  title: string;
  description: string;
  imageSrc: string;
  url?: string;
}

export const getFileDetails = (fileName: string | null): FileDetails => {
  if (!fileName) {
    return {
      title: '',
      description: 'Select a file to view details',
      imageSrc: ''
    };
  }

  const fileDetailsMap: Record<string, FileDetails> = {
    'Chess With Python': {
      title: 'Chess With Python',
      description: `A fully functional chess game implemented in Python using Pygame.
      Features include:
      - Complete chess rule implementation
      - Move validation
      - Check and checkmate detection
      - Piece movement highlighting
      - Game state tracking`,
      imageSrc: '/ChessWithPythonIcon.png',
      url: 'https://github.com/AniA13/chessWithPython' // Replace with actual URL
    },
    'NC State Hackathon 25': {
      title: 'NC State Hackathon 2025',
      description: 'Project developed during the NC State Hackathon...',
      imageSrc: '/HackNcState25.png',
      url: 'https://github.com/AdvaitP-1/hackathon' // Replace with actual URL
    },
    'Resume.pdf': {
      title: 'Resume',
      description: 'My resume in PDF format',
      imageSrc: '/pdficon.png',
      url: '/Resume.pdf' // Replace with actual URL
    }
  };

  return fileDetailsMap[fileName] || {
    title: '',
    description: 'Select a file to view details',
    imageSrc: ''
  };
};

export interface FolderContent {
  name: string;
  type: 'pdf' | 'txt' | 'docx' | 'mp3' | 'image';
  imageSrc?: string;
}

export const folderContents: Record<string, FolderContent[]> = {
  'projects': [
    {
      name: 'Chess With Python',
      type: 'image',
      imageSrc: '/ChessWithPythonIcon.png'
    },
    {
      name: 'NC State Hackathon 25',
      type: 'image',
      imageSrc: '/HackNcState25.png'
    }
  ],
  'music': [
    {
      name: 'Placeholder Song.mp3',
      type: 'mp3'
    }
  ],
  'aboutme': [
    {
      name: 'Resume.pdf',
      type: 'pdf'
    }
  ]
};
