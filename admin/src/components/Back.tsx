
import { Link } from "react-router-dom";
 interface Props{
    link:string;
    styles?: string
 }
function Back({ link, styles } : Props) {
  return (
    <Link to={link} className={`${styles} absolute flex items-center gap-2 border text-sm border-slate-300 bg-slate-50 rounded-sm hover:bg-slate-200 px-4 py-1`}>
      <span>0</span>
      Back
    </Link>
  );
}

export default Back;
