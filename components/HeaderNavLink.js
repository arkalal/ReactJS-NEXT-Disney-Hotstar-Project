import React from 'react'

const HeaderNavLink = ({ Icon, name }) => {
    return (
        <div>
            <a href="" className='header-link group'>
                <Icon className='h-4'></Icon>
                <span className='span'> {name} </span>
            </a>
        </div>
    )
}

export default HeaderNavLink