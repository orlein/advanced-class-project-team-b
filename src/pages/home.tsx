// import { cn } from '@/lib/utils';

// function DemoContainer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
//   return (
//     <div className={cn('flex items-center justify-center [&>div]:w-full', className)} {...props} />
//   );
// }

export default function HomePage() {
  return (
    <div className="grid items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
      Home
    </div>
  );
}
