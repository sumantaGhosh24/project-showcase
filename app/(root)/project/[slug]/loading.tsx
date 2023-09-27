import {Skeleton} from "@/components/ui/skeleton";

const loading = () => {
  return (
    <main className="">
      <section className="">
        <Skeleton className="h-[200px] w-[350px] bg-red-500" />
      </section>
      <section className="">
        <Skeleton className="h-[200px] w-[350px] bg-red-500" />
        <div className="">
          <Skeleton className="h-[200px] w-[350px] bg-red-500" />
          <Skeleton className="h-[200px] w-[350px] bg-red-500" />
          <Skeleton className="h-[200px] w-[350px] bg-red-500" />
        </div>
      </section>
    </main>
  );
};

export default loading;
