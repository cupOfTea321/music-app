import { logo } from '../assets';
import { useState } from 'react';
import { links } from '../assets/constants';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu, RiCloseLine } from 'react-icons/all';

const NavLinks = ({handleClick}) => {

  return (
    <div className={`mt-10`}>
      {links.map(item => (
        <NavLink className={`flex flex-row justify-start items-center my-8 text-sm
        font-medium text-gray-400 hover:text-cyan-400`}
        key={item.name} to={item.to} onClick={() => handleClick && handleClick()}>
          <item.icon className={`w-6 h-6 mr-2`}/>
          {item.name}
        </NavLink>
      ))}
    </div>

  )
}
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return(
    <>
      <div className={`md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]`}>
        <img src={logo} alt="logo" className={`w-full h-14 object-contain`}/>
        <NavLinks/>
      </div>

      <div className={`absolute md:hidden block top-6 right-3`}>
        {mobileMenuOpen ? (
          <RiCloseLine onClick={() => setMobileMenuOpen(false)} className={`w-6 h-6 text-white mr-2`}/>
        ) : <HiOutlineMenu onClick={() => setMobileMenuOpen(true)} className={`w-6 h-6 text-white mr-2`}/>}
      </div>

      <div className={`absolute h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b]
      background-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0'
      : '-left-full'}`}>
        <img src={logo} alt="logo" className={`w-full h-14 object-contain`}/>
        <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
      </div>
    </>

  )
}

export default Sidebar;
