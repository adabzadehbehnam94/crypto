import Image from 'next/image';
import React from 'react';
import logo from '@/public/icons/newLogoCrypto.png'
import Link from 'next/link';

const Header = () => {
    return (
        <div className='backHeader'>
            <div className='container mx-auto px-5 pt-3'>
                <Link href={"/"} className='block w-[fit-content]'>
                    <Image src={logo} width={200} height={100} alt='logo' />
                </Link>

            </div>
        </div>
    );
};

export default Header;