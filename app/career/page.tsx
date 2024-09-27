import Link  from "next/link"
export default function Career(){
    return(
    
     <>
    <ul className="flex gap-2 bg-orange-600">
    <li><Link href='/home'>Home</Link></li>
    <li><Link href='/about'>About</Link></li>
    <li><Link href='/contact_us'>contact us</Link></li>
    <li><Link href='/career'>career</Link></li>
     </ul>
        <h1>Career page</h1></>
    )
}