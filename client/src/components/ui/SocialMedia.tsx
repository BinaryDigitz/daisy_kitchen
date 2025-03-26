import { socialLink } from "../../data"

function SocialMedia() {
  return (
     
              <ul className="flex gap-1 items-center">
                {socialLink.map(item => <li className="paragraph2 p-1 py-2  opacity-80 hover:opacity-100 trans" key={item.name}>
                  <a href={item.link} target="_blank" rel="noreferrer" className="flex gap-2 items-center">
                  <span className="size-5" title={`Visit their ${item.name}`}>{item.icon}</span>
                  <p className="sr-only">{item.name}</p>
                  </a>
                </li>)}
            </ul>
          
  )
}

export default SocialMedia
