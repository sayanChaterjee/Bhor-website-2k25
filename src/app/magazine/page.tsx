import React from 'react';
import { HTMLFlipBook } from '../components/magazine/html-flip-book';
import Book from '../components/magazine/Book';

interface PageProps {
    children?: React.ReactNode;
    number?: number;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
    return (
        <div className="demoPage bg-yellow-100" ref={ref}>
            /* ref required */
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});


export default function MagazinePage() {
    return (
      <Book />
    );
}