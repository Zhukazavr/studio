'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function PaymentContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service') || 'Неизвестный продукт';
  const price = searchParams.get('price');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const isFormValid = firstName.trim() !== '' && lastName.trim() !== '' && phone.trim() !== '';

  const formattedPrice = price ? new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'KZT', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(price)) : 'N/A';
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Подтверждение заказа</CardTitle>
          <CardDescription>Пожалуйста, проверьте детали и перейдите к оплате.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-start border-t pt-4 gap-4">
            <span className="text-muted-foreground whitespace-nowrap">Продукт:</span>
            <span className="font-semibold text-right">{service}</span>
          </div>
           <div className="space-y-2">
            <Label htmlFor="firstName">Имя</Label>
            <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Иван" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Фамилия</Label>
            <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Иванов" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Номер телефона</Label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (777) 123-45-67" required />
          </div>
          <div className="flex justify-between items-center text-xl border-t pt-4">
            <span className="font-bold">К оплате:</span>
            <span className="font-bold text-primary-foreground bg-primary/90 rounded-md px-3 py-1">{formattedPrice}</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад
            </Link>
          </Button>
          <Button className="w-full" disabled={!isFormValid}>
            <CreditCard className="mr-2 h-4 w-4" />
            Оплатить (скоро)
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function PaymentSkeleton() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full mt-2" />
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-center border-t border-b py-4">
                        <Skeleton className="h-5 w-1/4" />
                        <Skeleton className="h-5 w-1/2" />
                    </div>
                     <div className="space-y-2">
                        <Skeleton className="h-4 w-1/4" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                     <div className="space-y-2">
                        <Skeleton className="h-4 w-1/4" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                     <div className="space-y-2">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                    <div className="flex justify-between items-center text-xl border-t pt-4">
                        <Skeleton className="h-6 w-1/3" />
                        <Skeleton className="h-8 w-1/4" />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-2">
                    <Skeleton className="h-10 w-full sm:w-auto flex-1" />
                    <Skeleton className="h-10 w-full flex-1" />
                </CardFooter>
            </Card>
        </div>
    );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<PaymentSkeleton />}>
      <PaymentContent />
    </Suspense>
  );
}
