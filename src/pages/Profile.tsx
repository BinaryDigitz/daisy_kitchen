import { useContext } from "react"
import { AppContext } from "../providers/Context"
import { Title } from "../components/exportComp"


function Profile() {
 const { userData } = useContext(AppContext)
  return (
    <div className="grid place-items-center">
      <Title text1="YOUR" text2="PROFILE" size="heading3" />
      <div>
        
      </div>
    </div>
  )
}

export default Profile
