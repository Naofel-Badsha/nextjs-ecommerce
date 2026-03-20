import Footer from "@/shared/Footer/Footer"
import Navbar from "@/shared/Navbar/Navbar"


const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default layout