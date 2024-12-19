import { InputSearch, Logo, NavbarItems, NavbarMenu } from "../exportComp"


function Navbar() {
  return (
    <nav className="flex md:justify-around gap-3 justify-between items-center p-3 py-4 lg:py-6 shadow-md text-[var(--secondary-color)]">
      <Logo/>
      <InputSearch onSearch={(search) => console.log(search)}/>
      <NavbarItems/>
      <NavbarMenu/>
    </nav>
  )
}

export default Navbar
