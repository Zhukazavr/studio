import { ScrollArea } from "@/components/ui/scroll-area";
import { ServiceCard } from "@/components/service-card";
import { 
  Droplet, 
  Shield, 
  User, 
  Baby, 
  ShieldAlert, 
  Flower2, 
  Utensils, 
  Grape as Bug, // Using Grape as a placeholder for Candida/Bug
  Wind, 
  TestTubeDiagonal as BugPlay, // Using TestTube as placeholder for Parasites
  Salad, 
  FlaskConical, 
  BrainCircuit, 
  Apple,
  Voicemail as Mic // Using Voicemail as a placeholder for chronic tonsillitis
} from "lucide-react";

const services = [
  { title: "Анемия", price: 30000, icon: Droplet },
  { title: "АИТ", description: "аутоиммунный тиреоидит Хашимото", price: 20000, icon: Shield },
  { title: "Атопический дерматит у взрослых", price: 20000, icon: User },
  { title: "Атопический дерматит у детей", price: 20000, icon: Baby },
  { title: "Псориаз", price: 30000, icon: ShieldAlert },
  { title: "Сезонная аллергия, поллиноз", price: 20000, icon: Flower2 },
  { title: "Введение прикорма для детей до года", price: 10000, icon: Utensils },
  { title: "Кандида", price: 20000, icon: Bug },
  { title: "СИБР", description: "синдром избыточного бактериального роста в кишечнике", price: 20000, icon: Wind },
  { title: "Паразиты", price: 20000, icon: BugPlay },
  { title: "Питание при лечении паразитов", price: 10000, icon: Salad },
  { title: "Аммиак", price: 30000, icon: FlaskConical },
  { title: "Нейровоспаление", price: 30000, icon: BrainCircuit },
  { title: "Питание при кандидозе", price: 10000, icon: Apple },
  { title: "Хронический тонзиллит", price: 30000, icon: Mic },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md rounded-2xl bg-card shadow-2xl overflow-hidden border">
        <header className="p-6 text-center border-b bg-card">
           <h1 className="text-2xl font-bold font-headline text-foreground">
            Akbota HealthBot
          </h1>
          <p className="mt-2 text-muted-foreground">
            Добро пожаловать на канал Акботы, нутрициолога со стажем.
          </p>
        </header>
        <ScrollArea className="h-[60vh] sm:h-[65vh]">
          <div className="p-2 sm:p-4 space-y-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </ScrollArea>
        <footer className="p-3 text-center text-xs text-muted-foreground border-t bg-card">
          <p>Выберите услугу для перехода к оплате</p>
        </footer>
      </div>
    </main>
  );
}
