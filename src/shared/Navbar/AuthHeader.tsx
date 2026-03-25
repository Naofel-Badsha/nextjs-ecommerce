import Container from '@/components/common/Container'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const AuthHeader = () => {
  return (
    <div className='bg-linear-to-br from-shop_orange/5 via-shop_light_bg to-shop_light_pink/60'>
      AuthHeader
      <Container className='flex items-center justify-between'>
        <Link href="/" className='flex items-center gap-1'><FaArrowLeft /><span >Back to Home</span></Link>
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