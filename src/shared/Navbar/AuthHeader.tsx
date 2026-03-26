import Container from '@/components/common/Container'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const AuthHeader = () => {
  return (
    <div className='bg-linear-to-br from-shop_orange/5 via-shop_light_bg to-shop_light_pink/60 py-5 shadow'>
      <Container className='flex items-center justify-between'>
        <Link href="/" className='flex items-center gap-1 hover:text-shop_light_green'><FaArrowLeft /><span className='font-medium'>Back to Home</span></Link>
        <div className="">
          <Link href={"/"}>
            <h2 className="text-md font-semibold font-poppins text-shop_dark_green">NexCart</h2>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default AuthHeader