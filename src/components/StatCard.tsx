
import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 text-center">
      <div className="text-primary mb-3 flex justify-center">{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

export default StatCard;
