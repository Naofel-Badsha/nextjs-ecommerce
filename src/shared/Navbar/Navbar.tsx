'use client'
import Container from "@/components/common/Container"
import { ModeToggle } from "@/components/ui/mode-toggle"
import headerNavItems from "@/constants/data"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Navbar = () => {
    const pathname = usePathname()
    return (
        <header className="py-5 border-b border-b-border">
            <Container className="flex items-center justify-between gap-5">
                {/*-------Logo------*/}
                <div className="">
                    <Link href={"/"}>
                        <h2 className="text-md font-semibold font-poppins text-shop_dark_green">NexCart</h2>
                    </Link>
                </div>

                {/*---------Navbar--------*/}
                <div className="hidden md:inline-flex items-center justify-center gap-7 text-sm font-semibold text-light-color capitalize relative">
                    {
                        headerNavItems?.map((item) => (
                            <Link 
                            key={item.id} 
                            className={cn("hover:text-shop_light_green hoverEffect ", pathname === item?.href && "text-light-green")} href={item?.href}
                            >{item?.title}
                            </Link>
                        ))
                    }
                </div>

                {/*---------Icon--------*/}
                <div className="">
                    <ModeToggle />
                </div>
            </Container>
        </header>
    )
}

export default Navbar
