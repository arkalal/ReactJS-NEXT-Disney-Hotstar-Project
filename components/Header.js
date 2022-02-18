import Image from 'next/image'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import HeaderNavLink from '../components/HeaderNavLink'

const Header = () => {
    return (
        <div className='sticky bg-[#040714] top-0 z-[1000] h-[72px] px-10 md:px-12 flex items-center'>
            <Image className='cursor-pointer' src='/images/logo.svg' alt='' width={80} height={80}></Image>

            <div>
                <HeaderNavLink Icon={HomeIcon} name='Home'></HeaderNavLink>
            </div>
        </div>
    )
}

export default Header