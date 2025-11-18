
import type React from 'react';

export interface Experience {
  company: string;
  roles: {
    role: string;
    period: string;
    tasks: string[];
  }[];
}


export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}
