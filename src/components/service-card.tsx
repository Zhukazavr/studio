import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  price: number;
};

export function ServiceCard({ icon: Icon, title, description, price }: ServiceCardProps) {
  const formattedPrice = new Intl.NumberFormat('ru-RU').format(price / 1000);
  const serviceQueryParam = encodeURIComponent(title);
  const priceQueryParam = price;

  return (
    <Link 
      href={`/payment?service=${serviceQueryParam}&price=${priceQueryParam}`} 
      className="block group"
      aria-label={`Перейти к продукту ${title}`}
    >
      <Card className="p-3 flex items-center gap-4 transition-all duration-300 ease-in-out hover:bg-accent hover:shadow-lg hover:-translate-y-0.5">
        <div className="bg-primary/10 text-primary p-3 rounded-lg">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold font-headline text-card-foreground whitespace-normal">{title}</h3>
          {description && <p className="text-xs text-muted-foreground mt-1 whitespace-normal">{description}</p>}
        </div>
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Badge variant="secondary" className="text-sm py-1 px-3 rounded-md">{formattedPrice} тыс.</Badge>
          <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
}
