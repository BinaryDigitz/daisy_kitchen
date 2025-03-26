import { NavLink } from "react-router-dom"

function NavbarItems() {
    const navItems = [
    {name: 'Home', link: '/'},
    {name: 'Kitchen', link: '/kitchen'},
    {name: 'Training', link: '/training'},
    {name: 'About us', link: '/about'},
    {name: 'Contact us', link: '/contact'},
    ]
  return (
    <section className=" space-x-4 hidden md:flex ">
        {navItems.map(item => <NavLink to={item.link} key={item.name}>
        <button className="btn button2 hover:cursor-pointer  hover:opacity-100 trans">{item.name}</button>
        </NavLink>)}
     </section>
  )
}

export default NavbarItems
