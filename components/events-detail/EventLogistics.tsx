import classes from "./event-logistics.module.css"
import items from "./logistics-item.module.css"
import content from "./event-content.module.css"

function EventLogistics(props: {
    image: string,
    date: string,
    location: string,
    description: string
}) {
    const { image, date, location, description } = props

    return (
        <>
            <div className={content.content}>
                <div className={classes.space}>
                    <div className={classes.logistics}>
                        <time className={items.item}>{date}</time>
                        <address className={items.item}>{location}</address>
                    </div>
                </div>
                <div className={classes.logistics}>
                    <div className={classes.image}>
                        <img src={"/" + image} alt=""/>
                    </div>
                    <div className={classes.list}>
                        <div className={classes.list}>
                        <span>{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventLogistics