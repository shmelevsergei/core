import React from 'react';
import Image from "next/image";

import banner from '/public/banner-brands.png'
import Search from "@/components/header/Search";
import Question from "@/components/header/Question";
import LogoutButton from "@/components/header/LogoutButton";
const Header = () => {
    return (
        <header className={'min-h-16 bg-[#FCFCFF] shadow-base w-full'}>
            <div className={'flex items-center pr-4'}>

                    <Image src={banner} alt={'Banner'}/>
                    <Search/>


                <div className={'text-sm ml-auto flex items-center gap-7'}>
                    <Question/>
                    <LogoutButton/>
                </div>
            </div>


        </header>
    );
};

export default Header;