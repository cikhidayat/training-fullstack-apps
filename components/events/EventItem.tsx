import LinkButton from "../ui/LinkButton";
import classes from "./event-item.module.css"

function EventItem(props: {
    id:string;
    image:string;
    title:string;
    date:string;
    location:string
}) {
    const { id, image, title, date, location } = props

    return (
        <li key={id} className={classes.item}>
            <img src={"/" + image} alt=""/>
            <div>
                <div className={classes.content}>
                    <h2>{title}</h2>
                </div>
                <div className={classes.content}>
                    <time className={classes.date}>{date}</time>
                </div>
                <div className={classes.content}>
                    <address className={classes.address}>{location}</address>
                </div>
                <div className={classes.content}>
                    <LinkButton link={"./events/" + id} linkDesc="Explore Event"/>
                </div>
            </div>
        </li>
    )
}

export default EventItem
