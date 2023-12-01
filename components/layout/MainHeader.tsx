import Link from "next/link"
import LinkButton from "../ui/LinkButton"
import classes from "./main-header.module.css"

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">MeetupEvents</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li className={classes.headerList}><LinkButton link="/events" linkDesc="Browse All Events"/></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader