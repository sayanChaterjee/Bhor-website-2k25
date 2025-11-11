'use client'
import React from 'react';
import { HTMLFlipBook } from '../components/magazine/html-flip-book';
import Book from '../components/magazine/Book';



export default function MagazinePage() {
    React.useEffect(() => {
        // Prevent scrolling on this page
        document.body.style.overflow = 'hidden';
        return () => {
            // Re-enable scrolling when leaving the page
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
      <div 
        className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden fixed inset-0" 
        style={{ backgroundImage: 'url(/book/background.jpg)' }}
      >
        <Book />
      </div>
    );
}