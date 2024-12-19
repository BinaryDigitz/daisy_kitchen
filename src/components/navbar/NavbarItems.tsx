import { NavLink } from "react-router-dom"

function NavbarItems() {
    const navItems = [
    {name: 'Home', link: '/'},
    {name: 'Kitchen', link: '/kitchen'},
    {name: 'Services', link: '/services'},
    {name: 'About', link: '/about'},
    {name: 'Contact', link: '/contact'},
    ]
  return (
    <section className=" space-x-4 hidden md:flex ">
        {navItems.map(item => <NavLink to={item.link} key={item.name}>
        <p className="hover:cursor-pointer opacity-80 hover:opacity-100 trans">{item.name}</p>
        </NavLink>)}
     </section>
  )
}

export default NavbarItems
