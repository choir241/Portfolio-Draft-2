
import React from 'react';
import { cn } from '@/lib/utils';
import SocialLinks from './SocialLinks';
import { Labels } from '@/static/Labels';
interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn("py-12 bg-portfolio-primary text-portfolio-lightest", className)}>
      <section className="mx-auto px-4">
        <section className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-portfolio-lightest">{Labels.footer.author} </h2>
            <p className="text-sm">{Labels.footer.description}</p>
          </div>
          
          <SocialLinks className="mb-6 md:mb-0" />
          
          <p className="text-sm text-center md:text-right">&copy; {currentYear} {Labels.footer.copyright}</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
