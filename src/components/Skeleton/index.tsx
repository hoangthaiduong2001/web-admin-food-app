import { cn } from '@/config/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-primary/10', className)}
      {...props}
    />
  );
}

export default function TableSkeleton() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <Skeleton className="w-1/4 h-[20px] rounded-md" />
        <Skeleton className="w-1/4 h-[20px] rounded-md" />
        <Skeleton className="w-1/4 h-[20px] rounded-md" />
        <Skeleton className="w-1/4 h-[20px] rounded-md" />
      </div>
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-2"
        >
          <Skeleton className="w-1/4 h-[20px] rounded-md" />
          <Skeleton className="w-1/4 h-[20px] rounded-md" />
          <Skeleton className="w-1/4 h-[20px] rounded-md" />
          <Skeleton className="w-1/4 h-[20px] rounded-md" />
        </div>
      ))}
    </div>
  );
}
