import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="p-10 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center space-x-4 mx-auto space-y-4 lg:space-y-0">
      <div className="flex space-x-4">
        <div className="hidden lg:inline space-y-4">
          <Skeleton className="w-[100px] h-[100px] rounded-md" />
          <Skeleton className="w-[100px] h-[100px] rounded-md" />
          <Skeleton className="w-[100px] h-[100px] rounded-md" />
        </div>

        <Skeleton className="inline lg:hidden w-[200px] h-[200px] rounded-md" />

        <Skeleton className="hidden lg:inline lg:w-[400px] lg:h-[300px] rounded-md" />
      </div>

      <div className="w-[400px] h-[500px] sm:w-[520px] sm:h-[780px] rounded-md space-y-2 border p-2 animate-pulse">
        <Skeleton className="w-[380px] h-[40px] sm:w-[500px] rounded-md" />
        <Skeleton className="w-[380px] h-[40px] sm:w-[300px] rounded-md" />
        <Skeleton className="w-[380px] h-[385px] sm:h-[650px] sm:w-[500px] rounded-md" />
      </div>
    </div>
  );
}

export default Loading;
