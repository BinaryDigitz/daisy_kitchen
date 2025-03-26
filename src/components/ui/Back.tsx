import { Link } from "react-router-dom"
interface Props {
  link: string
}

function Back({link}: Props) {
  return (
<Link to={link} >
     <div className="flex  gap-1 items-center hover:bg-gray-200  hover:underline trans cursor-pointer absolute top-1 left-3 p-1 px-3 z-50 text-sm rounded-full shadow-sm" title="Go back">
      <span><svg xmlns="http://www.w3.org/2000/svg" className="size-3" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></span>
      <p>Back</p>
    </div>
</Link>
  )
}

export default Back
