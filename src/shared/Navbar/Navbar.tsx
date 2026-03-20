import Container from "@/components/common/Container"
import Link from "next/link"


const Navbar = () => {
    return (
        <header className="py-5 border-b border-b-border">
            <Container>
                <div className="">
                    <Link href={"/"}>
                        <h2 className="">NexCart</h2>
                    </Link>
                </div>
            </Container>
        </header>
    )
}

export default Navbar
