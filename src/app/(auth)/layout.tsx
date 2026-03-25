import AuthHeader from '@/shared/Navbar/AuthHeader'
import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <AuthHeader />
        {children}
    </div>
  )
}

export default AuthLayout