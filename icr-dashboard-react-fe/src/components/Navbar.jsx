import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/images/Icons/logo.svg';
import menuLeft from '../assets/images/Icons/menuLeft.svg';
import mobileLogo from '../assets/images/Icons/mobileLogo.svg';
import { navUrls } from '../assets/data/navUrls';
import { NavLink } from 'react-router-dom';
import subMenuRight from '../assets/images/Icons/subMenuRight.svg';
import subMenuBottom from '../assets/images/Icons/subMenuBottom.svg';
import burger from '../assets/images/Icons/burger.svg';
import icrIcon from '../assets/images/Icons/icrIcon.svg';
import cog from '../assets/images/Icons/cog.svg';
import downArrow from '../assets/images/Icons/downArrow.svg';
import Checkbox from '../assets/images/Icons/Checkbox.svg';
import hidePassword from '../assets/images/Icons/hidePassword.svg';
import { useLocation } from 'react-router-dom';
import { useIcrOptions } from '../context/settingsContext';
import { icrOptionsData } from '../assets/data/constants';
import useOutsideAlerter from '../hooks/useOutsideAlerter';



const Navbar = () => {
    const settingsRef = useRef(null);
    const settingsBtnRef = useRef(null);
    const { icrOptions, handleIcrOptions, isChecked, handleCheckbox } = useIcrOptions();
    const location = useLocation();
    const [toggle, setToggle] = useState(false)
    const [openSubMenus, setOpenSubMenus] = useState([]);
    const [openSettigs, setOpenSettings] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)



    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleSettings = () => {
        setOpenSettings(!openSettigs)
    }

    const handleOpenOptions = () => {
        setOpenOptions(!openOptions)
    }

    useOutsideAlerter(settingsRef, handleSettings, settingsBtnRef);

    useEffect(() => {
        const checkActiveLink = () => {
            navUrls.forEach((item) => {
                if (item.subMenu.some(subItem => subItem.url === location.pathname)) {
                    setOpenSubMenus([item.id])
                }
            })
        }

        checkActiveLink();
    }, [])

    const toggleSubMenu = (id) => {
        if (openSubMenus.includes(id)) {
            setOpenSubMenus(openSubMenus.filter((menuId) => menuId !== id));
        } else {
            setOpenSubMenus([...openSubMenus, id]);
        }
    }

    const selectedOption = icrOptionsData.find(option => option.value === icrOptions);
    const selectedLabel = selectedOption ? selectedOption.label : '';

    return (
        <div className={`flex flex-col justify-between items-center ${toggle ? 'w-16 sidebar-transition' : 'w-[280px] sidebar-transition'}`}>
            <div className='flex flex-col w-full'>
                {
                    toggle ? (
                        <div className='flex flex-col border-b border-lightGrey'>
                            <div className='w-16'>
                                <img src={mobileLogo} alt='logo' className='w-full h-full' />
                            </div>
                            <button className='w-full h-5 my-5 flex justify-center items-center' onClick={() => handleToggle()}>
                                <img src={menuLeft} alt='toggle Icon' className='w-full h-full transform rotate-180' />
                            </button>

                        </div>
                    ) : (
                        <div className='flex justify-between items-center px-6 py-7 mb-2 border-b border-lightGrey'>
                            <div className='w-[117px]'>
                                <img src={Logo} alt='logo' className='w-full h-full' />
                            </div>
                            <button className='w-[18px] h-[14px]' onClick={() => handleToggle()}>
                                <img src={menuLeft} alt='toggle Icon' className='w-full h-full' />
                            </button>

                        </div>
                    )
                }
                {
                    toggle ? (
                        <div className='flex flex-col'>
                            {
                                navUrls.map((item) => (
                                    <div key={item.id} className='w-full h-5 my-5 flex justify-center items-center'>
                                        {
                                            item.subMenu.some(subItem => subItem.url === location.pathname) ? <img src={item.iconActive} alt='Submenu Icon' className='w-full h-full' /> : <img src={item.icon} alt='Submenu Icon' className='w-full h-full' />
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div className='w-full flex flex-col'>
                            {navUrls.map((item) => (
                                <div key={item.id} className='my-1 mx-2'>
                                    <div
                                        className={`w-full py-2 px-4 flex gap-4 items-center rounded-lg ${item.subMenu.some(subItem => subItem.url === location.pathname) ? 'bg-grey' : 'bg-white'}`}
                                        onClick={() => toggleSubMenu(item.id)}
                                    >
                                        <div className='flex items-center'>
                                            <div className='w-4 h-4'>
                                                {openSubMenus.includes(item.id) ? <img src={subMenuBottom} alt='Submenu Icon' /> : <img src={subMenuRight} alt='Submenu Icon' />}
                                            </div>
                                            <div className='w-[20px] h-[20px]'>
                                                <img src={item.icon} alt={item.name} className='w-full h-full object-cover' />
                                            </div>
                                        </div>
                                        <div className='font-inter-medium text-sm text-neutralBlue'>
                                            {item.name}
                                        </div>
                                    </div>
                                    {
                                        !toggle && (
                                            <div className={`overflow-hidden transition-all duration-300 ${openSubMenus.includes(item.id) ? 'block' : 'hidden'}`}>
                                                <div className='flex flex-col ml-4'>
                                                    {item.subMenu.map((subItem) => (
                                                        <NavLink
                                                            key={subItem.id}
                                                            to={subItem.url}
                                                            className={({ isActive }) => `py-2 px-4 my-1 font-inter-medium pl-20 text-sm text-neutralBlue ${isActive ? 'bg-grey1 text-darkBlue' : 'bg-white'} rounded-lg`}
                                                        >
                                                            {subItem.name}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
            <div className='flex w-full mb-3 relative'>
                <div className='flex w-full justify-between items-center my-1 mx-2 py-2 px-4 rounded-lg'>
                    <div className='flex items-center justify-start gap-2'>
                        <div className='w-[20px] h-[20px]'>
                            <img src={cog} alt='Settings Icon' className='w-full h-full object-cover' />
                        </div>
                        {
                            toggle ? null : (
                                <div className='font-inter-medium text-sm text-neutralBlue'>
                                    Settings
                                </div>
                            )
                        }

                    </div>
                    {
                        toggle ? null : (
                            <button ref={settingsBtnRef} onClick={() => handleSettings()} className={`w-[25px] h-[25px] rounded-lg p-1 ${openSettigs ? 'bg-lightGrey' : ''}`}>
                                <img src={burger} alt='burger Icon' className='w-full h-full object-cover' />
                            </button>
                        )
                    }
                </div>
                {/* absolute div  */}
                {
                    toggle ? null : openSettigs && (
                        <div ref={settingsRef} className='absolute max-w-[330px] w-[330px] bg-white shadow-lg rounded-lg border py-2 border-lightGrey left-7 bottom-14 z-10'>
                            <div className='flex flex-col w-full pt-3'>
                                <div className='flex gap-2 justify-between w-full pb-2 px-4'>
                                    <div className='w-[20px] h-[20px]'>
                                        <img src={icrIcon} alt='ICR Logo' className='w-full h-full object-cover' />
                                    </div>
                                    <div className=' flex items-center justify-start'>
                                        <h2 className='font-inter-medium font-medium text-base text-lightBlack'>ICR Involvement: <span className='text-orange'>{selectedLabel}</span></h2>
                                    </div>
                                    <div className='w-[20px] h-[20px]' onClick={() => handleOpenOptions()}>
                                        <img src={downArrow} alt='Arrow Icon' className='w-full h-full object-cover' />
                                    </div>
                                </div>
                                {
                                    openOptions && (
                                        <div className='w-full flex flex-col pl-2 px-4 bg-grey2'>
                                            {icrOptionsData.map(option => (
                                                <button
                                                    key={option.value}
                                                    onClick={() => handleIcrOptions(option.value)}
                                                    className={`w-full border-b border-lightGrey flex justify-between py-2 px-3 pr-0 pl-10 text-base text-lightBlack ${icrOptions === option.value ? 'font-inter-bold font-semibold' : 'font-inter-medium font-medium'}`}
                                                >
                                                    {option.label}
                                                    {icrOptions === option.value && <img src={Checkbox} alt='Checkbox Icon' className='w-[20px] h-[20px] object-cover' />}
                                                </button>
                                            ))}
                                        </div>
                                    )
                                }

                                <div className='flex gap-2 justify-between w-full py-3 px-4 pl-3'>
                                    <div className='w-full flex justify-start gap-4'>
                                        <div className='w-[20px] h-[20px]'>
                                            <img src={hidePassword} alt='Hide Icon' className='w-full h-full object-cover' />
                                        </div>
                                        <div className=' flex items-center'>
                                            <h2 className='font-inter-medium font-medium text-base text-lightBlack'>Anonymous Mode</h2>
                                        </div>
                                    </div>
                                    <label className="flex items-center cursor-pointer">
                                        <div
                                            className={`relative rounded-full w-11 h-6 bg-transition duration-300 ease-in-out ${isChecked ? 'bg-orange1' : 'bg-lightGrey'
                                                }`}
                                        >
                                            <div className={`absolute left-1 w-4 h-4 top-1 rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${isChecked ? 'translate-x-5' : ''}`}>
                                            </div>
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="sr-only"
                                            id="sliding-checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckbox}
                                        />
                                    </label>
                                </div>
                                {/* { this will be logout button } */}
                                <div className='flex justify-start w-full py-3 border-t border-lightGrey pl-3 gap-4'>
                                    <div className='w-[20px] h-[20px]'>
                                        <img src={hidePassword} alt='Hide Icon' className='w-full h-full object-cover' />
                                    </div>
                                    <div className=' flex items-center'>
                                        <h2 className='font-inter-medium font-medium text-base text-lightBlack'>Log Out</h2>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Navbar
