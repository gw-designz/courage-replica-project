
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  link: string;
}

const ProductCard = ({ image, name, price, link }: ProductCardProps) => {
  return (
    <div className="group">
      <div className="relative rounded-lg overflow-hidden mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button className="gap-2">
              <ShoppingBag className="h-4 w-4" />
              Shop Now
            </Button>
          </a>
        </div>
      </div>
      <h3 className="font-medium mb-1">{name}</h3>
      <p className="text-muted-foreground">{price}</p>
    </div>
  );
};

export default ProductCard;
