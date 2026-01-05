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
    'Wolf Cafe': {
      title: 'Wolf Cafe',
      description: `CoffeeMaker backend and frontend for WolfCafe.
      - Built backend with Java, Spring Boot, Maven, REST APIs
      - Tested functionality using JUnit
      - Developed frontend with React and JavaScript
      - Integrated frontend with backend APIs
      - Managed database with SQL and tracked changes using Git`,
      imageSrc: '/WolfCafe.png',

    },
    'HackNC Fidelity Quickvest AI Hackathon': {
      title: 'HackNC Fidelity Quickvest AI Hackathon',
      description: `Voice assistant for guided account setup.
      - Built with Next.js and React
      - Voice input and real-time form filling
      - Clear feedback for smooth signup
      - ElevenLabs STT/TTS for speech
      - Gemini 2.5 Flash for data extraction and follow-ups`,
      imageSrc: '/HackNC2025.png',
      url: 'https://github.com/AniA13/hacknc2025unc'
    },
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
      url: 'https://github.com/AniA13/chessWithPython'
    },
    'Cache Forge': {
      title: 'Cache Forge',
      description: `A framework for discovering and refining cache replacement policies.
      - Iterative generator–evaluator workflow
      - Uses LLM to generate C++ policy code
      - Compiles and simulates each policy for feedback
      - Explores algorithmic structure, not just parameters
      - Maintains memory of past policies and outcomes
      - Enables experience-driven optimization`,
      imageSrc: '/CacheForge.png',
  },
    'NC State Hackathon 25': {
      title: 'NC State Hackathon 2025',
      description: 'Project developed during the NC State Hackathon.',
      imageSrc: '/HackNcState25.png',
      url: 'https://github.com/AniA13/hacknc25'
    },
    'Resume.pdf': {
      title: 'Resume',
      description: 'My resume in PDF format',
      imageSrc: '/pdficon.png',
      url: '/Resume.pdf'
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
      name: 'Cache Forge',
      type: 'image',
      imageSrc: '/CacheForge.png'
    },
    {
      name: 'Wolf Cafe',
      type: 'image',
      imageSrc: '/WolfCafe.png'
    },
    {
      name: 'HackNC Fidelity Quickvest AI Hackathon',
      type: 'image',
      imageSrc: '/HackNC2025.png'
    },
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
