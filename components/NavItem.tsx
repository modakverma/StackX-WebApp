import Link from "next/link";
import { IconType } from "react-icons";
import {twMerge} from "tailwind-merge";

interface NavbarItemProps{
  icon:IconType,
  label:string;
  active?:boolean;
  href:string;
}

const SidebarItem:React.FC<NavbarItemProps> = ({
  icon: Icon,
  label,
  active,
  href
}) => {
  return (
    <Link 
    href={href}
    className={twMerge(`
    flex 
    flex-row
    items-center
    text-md
    cursor-pointer
    hover:text-blue-500
    transition
    text-white
    font-normal
    `,
    active && "text-blue-500"
    )}
    >
      {/* <Icon size={26}/> */}
      <p className="truncate w-full" >{label}</p>
</Link>
  )
}

export default SidebarItem