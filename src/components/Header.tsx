
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingBag, Twitch, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-gradient">COURAGE</Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">HOME</Link>
              <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">COMMUNITY</a>
              <a href="#merch" className="text-sm font-medium hover:text-primary transition-colors">MERCH</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">ABOUT</a>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://www.twitch.tv/couragejd" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                <Twitch className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.youtube.com/channel/UCrgTEmBuoObZiEXvZ6q3JAw" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://courage.gg/collections/all" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <ShoppingBag className="h-4 w-4" />
                SHOP
              </Button>
            </a>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-border">
            <Link to="/" className="text-2xl font-bold text-gradient">COURAGE</Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col gap-4 px-4 py-8">
            <Link to="/" className="text-lg font-medium py-2 hover:text-primary transition-colors" onClick={toggleMenu}>HOME</Link>
            <a href="#community" className="text-lg font-medium py-2 hover:text-primary transition-colors" onClick={toggleMenu}>COMMUNITY</a>
            <a href="#merch" className="text-lg font-medium py-2 hover:text-primary transition-colors" onClick={toggleMenu}>MERCH</a>
            <a href="#about" className="text-lg font-medium py-2 hover:text-primary transition-colors" onClick={toggleMenu}>ABOUT</a>
            
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.twitch.tv/couragejd" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                  <Twitch className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.youtube.com/channel/UCrgTEmBuoObZiEXvZ6q3JAw" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Button>
              </a>
            </div>
            
            <a href="https://courage.gg/collections/all" target="_blank" rel="noopener noreferrer" className="mt-4">
              <Button className="w-full gap-2">
                <ShoppingBag className="h-4 w-4" />
                SHOP NOW
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
