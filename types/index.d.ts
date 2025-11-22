import React from 'react';

export interface Course {
    id: string;
    title: string;
    description: string;
    tags: string[];
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    image: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    avatarUrl?: string;
}

export interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
}