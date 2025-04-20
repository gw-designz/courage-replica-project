
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface SocialCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  stats: string;
  statsLabel: string;
  linkUrl: string;
  linkText: string;
  bgColor: string;
}

const SocialCard = ({
  icon,
  title,
  description,
  stats,
  statsLabel,
  linkUrl,
  linkText,
  bgColor,
}: SocialCardProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden group">
      <div className={`absolute inset-0 ${bgColor} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
      <div className="absolute inset-0 card-gradient"></div>
      
      <div className="relative p-6 flex flex-col h-full min-h-[320px]">
        <div style="color: #00517c;" className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="mt-auto">
          <div className="mb-4">
            <div className="text-2xl font-bold">{stats}</div>
            <div className="text-sm text-muted-foreground">{statsLabel}</div>
          </div>
          
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2 w-full">
              {linkText}
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
