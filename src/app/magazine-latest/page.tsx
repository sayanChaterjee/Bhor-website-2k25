'use client'
import React from 'react';
import Book from '../components/magazine/Book';
import Curtain from '../components/Curtain';



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
        <div className='absolute inset-0 w-full h-full z-100'>
          <Curtain onAnimationComplete={() => {
            // Allow scrolling after curtain animation completes
            document.body.style.overflow = 'auto';
          }} />
        </div>
        <Book />
      </div>
    );
}