import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"

type SidebarProps = {
    links: {
        name: string,
        path: string,
        icon: IconDefinition,
    }[];
    close: () => void;
};

export default function Sidebar({links, close}: SidebarProps){
    const location = useLocation()
    return (
        <div className="sidebar" onClick={close}>
            { links.map(link => (
                <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            )) }
        </div>
    )
}