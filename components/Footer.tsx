import { footerLinks } from "@/constants"
import Link from "next/link"
import Dribble from "../public/logo-purple.svg"
import Image from 'next/image'

type ColumnProps = {
  title :string;
  links:Array<string>;
}

const FooterColumn = ({ title, links }: ColumnProps) => {
  return (
    <div className="footer_column ">
      <h1 className="font-semibold">{title}</h1>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};

function Footer() {
  return (
    <footer className="footer w-full h-auto px-5">
      <div className="flex flex-col gap-12 w-full">
         <div className="flex items-start flex-col"> 
             <Image 
                 src={Dribble}
                 width={115}
                 height={38}
                 alt="Dribble"
             />
             <p className="text-small text-sm mt-5 font-normal  max-w-x5">
               Dribble is the world's leading community for<br/> creatives to
               share,grow, and get hired.
             </p>
         </div>


                <div className="footer-column flex flex-wrap justify-between gap-5 ">            
                        <div className="flex flex-wrap gap-12">
                         <FooterColumn title={footerLinks[0].title}
                             links={footerLinks[0].links}/>
                        </div>
                        <div className="flex flex-wrap gap-12">
                         <FooterColumn title={footerLinks[1].title}
                             links={footerLinks[1].links}/>
                        </div>
                        <div className="flex flex-wrap gap-12">
                         <FooterColumn title={footerLinks[2].title}
                             links={footerLinks[2].links}/>
                        </div>
                        <div className="flex flex-wrap gap-12">
                         <FooterColumn title={footerLinks[3].title}
                             links={footerLinks[3].links}/>
                        </div>
                        <div className="flex flex-wrap gap-12">
                         <FooterColumn title={footerLinks[4].title}
                             links={footerLinks[4].links}/>
                        </div>
                        <div className="flex flex-wrap gap-12">
                         <FooterColumn title={footerLinks[5].title}
                             links={footerLinks[5].links}/>
                        </div>
                </div>
         
      </div>

      <div className="footer_copy flex justify-between px-5 mt-5">
        <p>@2024 Dribble. All rights reserved</p>
        <p>
          <span className="text-sm text-gray-500">
            10,000
          </span> projects submitted
        </p>
      </div>
    </footer>
  )
}

export default Footer