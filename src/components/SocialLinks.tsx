
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';
import { cn } from '@/lib/utils';   
import { Labels } from '@/static/Labels';
interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {

  const socialLinks = [
    {
      href: Labels.socialLinks.github.link,
      icon: <FaGithub size={24} />,
      label: Labels.socialLinks .github.label
    },
    {
      href: Labels.socialLinks.twitter.link,
      icon: <FaTwitter size={24} />,
      label: Labels.socialLinks.twitter.label
    },    
    {
      href: Labels.socialLinks.linkedin.link,
      icon: <FaLinkedin size={24} />,
      label: Labels.socialLinks.linkedin.label
    }, 
    {
      href: Labels.socialLinks.bluesky.link,
      icon: <FaBluesky size={24} />,
      label: Labels.socialLinks.bluesky.label
    }
  ]   

  return (
    <section className={cn("flex items-center space-x-4", className)}>
      {socialLinks.map((link) => (
        <a 
          key={link.href}
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-all hover:text-portfolio-secondary focus:text-portfolio-secondary"
          aria-label={link.label}
        >
            {link.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialLinks;
