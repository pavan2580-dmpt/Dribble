import Link from 'next/link'
import Image from 'next/image'
import Logo from "../public/logo.svg"
import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'

function NavBar() {
    const session = true;
  return (
    <>
    <nav className='navbar-page flex px-10 justify-between items-center w-[100%] h-[60px] border-2
    border-solid border-black
    '>
            <div className="Inner-container flex justify-between border-2 border-solid border-red-500  ">
                <Link href={'/'}>
                    <Image 
                    src= {Logo} 
                    width={115} 
                    height={43} 
                    alt='Logo'/>
                </Link>
                <ul className='xl:flex hidden text-small
                 gap-7'>
                    {NavLinks.map((link)=>(
                        <Link href={link.href} key={link.key}>
                            {link.text}

                        </Link>
                    ))}
                </ul>
            </div>
            {/* --profile-- */}
            <div className='flex gap-5' >
                {session?(
                        <>
                            UserPhoto
                            <Link href={'/create-project'}>
                                Share work
                            </Link>
                        </>
                    ):(
                        <AuthProviders/>
                    )
                }
            </div>

    </nav>
    </>
  )
}

export default NavBar