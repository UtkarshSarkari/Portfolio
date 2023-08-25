import Image from "next/image"
import Link from "next/link"

export default function Header() {
    const links = ["Home", "About", "Projects", "Contact"]
  return (
    <nav className="w-screen fixed top-0 py-6 flex items-center justify-between font-mainFont bg-black z-50" >
      <div className="flex items-center ml-6 xs:mx-auto">
        <Image alt="Logo" src="/assets/withoutU.png" height={50} width={50} />
        <Image className=" hidden xs:block mr-auto cursor-pointer" src="/assets/sign.png" alt="sign" height={180} width={180} />
      </div>
        <ul className="md:flex mx-auto hidden">
          {
            links.map((link)=>(
              <li key={link} className="px-6"><Link className="cursor-pointer hover:text-gray-300" href="#">{link}</Link></li>
            ))
          }
        </ul>
        <Link className="xs:mx-auto mr-6 md:hidden" href="#"><Image src="/assets/menu.png" alt="menubar" height={40} width={40} /></Link>
    </nav>
  )
}

