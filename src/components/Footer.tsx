import { Link } from 'react-router-dom';
import { Twitter, Instagram, Youtube, Twitch } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient">FLIXIFY</h3>
            <p className="text-muted-foreground">
              Content creator, streamer, and gaming enthusiast.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com/TheFlixify" target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/TheFlixify/" target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@YTFlixify" target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.twitch.tv/TTVFlixify" target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors">
                <Twitch className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><a href="#community" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase mb-6">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:business.flixify@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Business Inquiries</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Flixify. All rights reserved.</p>
          <div className="flex space-x-8">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
