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
        <button className="btn button2 hover:cursor-pointer opacity-70 hover:opacity-100 trans">{item.name}</button>
        </NavLink>)}
     </section>
  )
}

export default NavbarItems
