import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <main className="">
      <section className="">
        <Skeleton className="" />
      </section>
      <section className="">
        <Skeleton className="" />
        <div className="">
          <Skeleton className="" />
          <Skeleton className="" />
          <Skeleton className="" />
        </div>
      </section>
    </main>
  )
}

export default loading