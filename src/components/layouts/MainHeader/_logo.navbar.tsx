import { formatImageUrl } from '@/lib/format-Image-url';
import Link from 'next/link';
import React from 'react';

/**
 * Defines the properties for the LogoNavbar component.
 */
interface LogoNavbarProps {
  /**
   * Optional additional CSS classes to apply to the main link element.
   */
  className?: string;
}

/**
 * Renders the site logo which links to the homepage.
 * This component dynamically displays different logo versions based on the viewport size (mobile/desktop)
 * and the current color scheme (light/dark mode).
 *
 * @param {LogoNavbarProps} props - The component props.
 * @returns {JSX.Element} The rendered logo component.
 */
export default function LogoNavbar({ className }: LogoNavbarProps) {
  // Define all logo variations in a structured array for clean, scalable rendering.
  const logoVariations = [
    {
      id: 'small-light-theme',
      src: formatImageUrl("/files/1757427123058-919107226.svg"), // Small logo for light theme
      visibilityClasses: 'xl:hidden dark:hidden', // Visible on small screens, light mode
      backgroundSize: 'bg-cover',
    },
    {
      id: 'small-dark-theme',
      src: formatImageUrl("/files/1757427180399-576508089.svg"), // Small logo for dark theme
      visibilityClasses: 'hidden xl:hidden dark:block', // Visible on small screens, dark mode
      backgroundSize: 'bg-cover',
    },
    {
      id: 'large-light-theme',
      src: formatImageUrl("/files/1757427431436-347568143.png"), // Large logo for light theme
      visibilityClasses: 'hidden dark:hidden xl:block', // Visible on large screens, light mode
      backgroundSize: 'bg-contain',
    },
    {
      id: 'large-dark-theme',
      src: formatImageUrl("/files/1757427333794-179598729.png"), // Large logo for dark theme
      visibilityClasses: 'hidden xl:dark:block', // Visible on large screens, dark mode
      backgroundSize: 'bg-contain',
    },
  ];

  // Base classes applied to all logo spans to avoid repetition.
  const baseLogoClasses = 'absolute inset-0 bg-no-repeat';

  return (
    <Link
      href="/"
      prefetch={true}
      className={`h-[4rem] xl:min-w-[10rem] min-w-[4rem] flex justify-center items-center ${className}`}
    >
      <div className="relative h-[3.8rem] w-[3.8rem] xl:h-full xl:w-full">
        {logoVariations.map((logo) => (
          <span
            key={logo.id}
            className={`${baseLogoClasses} ${logo.backgroundSize} ${logo.visibilityClasses}`}
            style={{ backgroundImage: `url(${logo.src})` }}
            // This is a decorative element, so hide it from screen readers.
            aria-hidden="true"
          />
        ))}
      </div>
    </Link>
  );
}