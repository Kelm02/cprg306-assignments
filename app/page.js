import Link from "next/link";
import { StudentInfo } from "./StudentInfo"


export default function Home() {
  return (
    <main className = "flex min-h-screen flex-col items-center p-24 text-center">
      <div>
        <h1 className = "flex flex-col text-xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo /> 
      </div>
      <div>
        <Link href="/week2" className ="bg-sky-700 rounded-md p-2 m-2">Week 2</Link>
        <Link href="/week3" className ="bg-sky-700 rounded-md p-2 m-2">Week 3</Link>
        <Link href="/week4" className ="bg-sky-700 rounded-md p-2 m-2">Week 4</Link>
        <Link href="/week5" className ="bg-sky-700 rounded-md p-2 m-2">Week 5</Link>
        <Link href="/week6" className ="bg-sky-700 rounded-md p-2 m-2">Week 6</Link>
        <Link href="/week7" className ="bg-sky-700 rounded-md p-2 m-2">Week 7</Link>
        <Link href="/week8" className ="bg-sky-700 rounded-md p-2 m-2">Week 8</Link>
        <Link href="/week10" className ="bg-sky-700 rounded-md p-2 m-2">Week 10</Link>
      </div>

    </main>
  )
}
