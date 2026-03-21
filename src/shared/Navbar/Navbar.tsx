import Container from "@/components/common/Container"
import Link from "next/link"


const Navbar = () => {
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
                <div className="">
                    Navigation
                </div>

                {/*---------Icon--------*/}
                <div className="">
                    Icon
                </div>
            </Container>
        </header>
    )
}

export default Navbar
