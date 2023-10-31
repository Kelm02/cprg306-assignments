import Link from "next/link";
import { StudentInfo } from "./StudentInfo"


export default function Home() {
  return (
    <main className="flex flex-col">

      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      
      <StudentInfo />
      <Link href="/week2">Click me for Week 2</Link>
      <Link href="/week3">Click me for Week 3</Link>
      <Link href="/week4">Click me for Week 4</Link>
      <Link href="/week5">Click me for Week 5</Link>

    </main>
  )
}
