import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


const Loading = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
    <section className="nav-paddings w-full">
    <Skeleton className="h-[274px] w-full rounded-l" />
    </section>
    <section className="mt-6 flex w-full flex-col sm:mt-20">
      <Skeleton className="h-10 w-56"/>
      <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
        <Skeleton className="h-[440px] w-full sm:-w[356]"/>
        <Skeleton className="h-[440px] w-full sm:-w[356]"/>
        <Skeleton className="h-[440px] w-full sm:-w[356]"/>
      </div>
    </section>
    </main>
  )
}

export default Loading