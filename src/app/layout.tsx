import "./globals.css"
// import "../../public/css/animate/index.css"
// import "../../public/css/scrollbar.css"
// import '../../public/icons/fontawesome-free-6.6.0-web/css/all.css';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return children;
}