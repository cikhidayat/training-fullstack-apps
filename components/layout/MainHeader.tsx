import Link from "next/link"
import classes from "./main-header.module.css"

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">MeetupEvents</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li className={classes.headerList}><Link href="/events">Browse All Events</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader