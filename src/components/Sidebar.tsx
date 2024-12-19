import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../providers/Context'

function Sidebar() {
    const appContext = useContext(AppContext)
    const asideItems = [
        {name: 'Home', link: '/', icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M400-240h40v-160q25 0 42.5-17.5T500-460v-120h-40v120h-20v-120h-40v120h-20v-120h-40v120q0 25 17.5 42.5T400-400v160Zm160 0h40v-340q-33 0-56.5 23.5T520-500v120h40v140ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/></svg>},
        {name: 'Kitchen', link: '/kitchen', icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M400-240h40v-160q25 0 42.5-17.5T500-460v-120h-40v120h-20v-120h-40v120h-20v-120h-40v120q0 25 17.5 42.5T400-400v160Zm160 0h40v-340q-33 0-56.5 23.5T520-500v120h40v140ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/></svg>},
        {name: 'Services', link: '/services', icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="m175-120-56-56 410-410q-18-42-5-95t57-95q53-53 118-62t106 32q41 41 32 106t-62 118q-42 44-95 57t-95-5l-50 50 304 304-56 56-304-302-304 302Zm118-342L173-582q-54-54-54-129t54-129l248 250-128 128Z"/></svg>},
        {name: 'About', link: '/about', icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>},
        {name: 'Contact', link: '/contact', icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eee"><path d="M480-440v-360q0-17 11.5-28.5T520-840h280q17 0 28.5 11.5T840-800v200q0 17-11.5 28.5T800-560H600L480-440Zm80-200h200v-120H560v120Zm0 0v-120 120Zm238 520q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>},
        ]
  return (
    <section className=" flex flex-col  p-4 mt-4">
      {
        asideItems.map(item => (
          <Link to={item.link} key={item.name} className="flex w-full items-center opacity-80 py-1 my-1 shadow-md  hover:opacity-100 rounded-md hover:bg-[var(--primary-color)] trans">
            <span  className="material-icons size-10 grid place-items-center">{item.icon}</span>
            <span onClick={appContext?.closeAllMenues} className='px-2 w-full'>{item.name}</span>
          </Link>
        ))
      }
    </section>
  )
}

export default Sidebar
