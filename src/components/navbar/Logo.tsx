import { Link } from "react-router-dom";
import { Title } from "../exportComp";
function Logo() {
  return (
    <Link to="/">
      <Title text1="Daisy" text2="Kitchen" size="heading3" />
    </Link>
  );
}

export default Logo;
