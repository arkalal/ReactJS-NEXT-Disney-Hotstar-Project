import Image from 'next/image'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import HeaderNavLink from '../components/HeaderNavLink'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import PaletteIcon from '@mui/icons-material/Palette';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const Header = () => {
    return (
        <div className='sticky bg-[#040714] top-0 z-[1000] h-[72px] px-10 md:px-12 flex items-center'>
            <Image className='cursor-pointer' src='/images/logo.svg' alt='' width={80} height={80}></Image>

            <div className='ml-10 hidden md:flex items-center space-x-6'>
                <HeaderNavLink Icon={HomeIcon} name='Home'></HeaderNavLink>
                <HeaderNavLink Icon={SearchIcon} name='Search'></HeaderNavLink>
                <HeaderNavLink Icon={AddIcon} name='Watchlist'></HeaderNavLink>
                <HeaderNavLink Icon={StarIcon} name='Originals'></HeaderNavLink>
                <HeaderNavLink Icon={PaletteIcon} name='Movies'></HeaderNavLink>
                <HeaderNavLink Icon={OndemandVideoIcon} name='Series'></HeaderNavLink>

                <button className='ml-auto uppercase border px-4 py-1.5 rounded tracking-wide hover:bg-white hover:text-black font-medium transition-all duration-200'>
                    Login</button>
            </div>
        </div>
    )
}

export default Header