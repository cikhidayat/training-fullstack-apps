import { Event } from "@/providers/EventRepository"
import EventItem from "./EventItem"
import classes from "./event-list.module.css"

function EventList(props: { items: Event[] }) {
    
    return (
        <>
            <ul className={classes.list}>
                {props.items.map((event) => (
                    <EventItem 
                        id={event.id} 
                        title={event.title}
                        image={event.image} 
                        location={event.location} 
                        date={event.date}
                    />
                ))}
            </ul>
        </>
    )
}

export default EventList