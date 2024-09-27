import Link from "next/link";
export default function header() {
  return (
     <>
   { <ul className="flex gap-2 bg-orange-600">
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/about'>About</Link></li>
      <li><Link href='/contact_us'>contact us</Link></li>
      <li><Link href='/career'>career</Link></li>
     </ul> }   
     </> 
  );
}

