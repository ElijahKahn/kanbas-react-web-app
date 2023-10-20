import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import { BsFillInboxFill } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdOutlineOutput } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import NU_logo from "./NU_logo.png";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-1 text" />,
    Dashboard: <RiDashboard3Line className="fs-3 text" />,
    Courses: <FaBook className="fs-3 text" />,
    Calendar: <BsCalendar2Week className="fs-3 text" />,
    Inbox: <BsFillInboxFill className="fs-3 text" />,
    History: <GoClock className="fs-3 text" />,
    Studio: <PiTelevisionSimple className="fs-3 text" />,
    Commons: <MdOutlineOutput className="fs-3 text" />,
    Help: <AiOutlineQuestionCircle className="fs-3 text"/>
  };

  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation list-group" style={{ width: 70, paddingBottom: 215}}>
      <img src={ NU_logo } alt="Logo"/>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item text-center p-4 ${
            pathname.includes(link) && "active"
          }`}
          style={{ padding: 0}}
        >
          {linksToIconsMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
