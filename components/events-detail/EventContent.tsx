import EventLogistics from "@/components/events-detail/EventLogistics";
import { Event } from "@/providers/EventRepository";
import classes from "./event-content.module.css"
import EventSummary from "./EventSummary";

function EventContent(props: {items: Event[] }) {

    return (
        <>
                {props.items.map((detail) => (
                    <>
                    <EventSummary title={detail.title}/>
                    <div className={classes.content}>
                        <EventLogistics
                            image={detail.image}
                            date={detail.date} 
                            location={detail.location}
                            description={detail.description}
                        />
                    </div> 
                    </>
                ))}
        </>
    )
}

export default EventContent