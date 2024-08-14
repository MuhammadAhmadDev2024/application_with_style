import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <header className='bg-red-200'>
        <h1>This is Muhammad Ahmad</h1>
        <Link href={'./src/About'}>About Us</Link>
        <Link href={'./src/Products'}>Produts</Link>
        <Link href={'./src/Outlets'}>Outlets</Link>
      </header>
      






      
    
  );
}
