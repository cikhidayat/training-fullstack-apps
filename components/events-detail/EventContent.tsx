import EventLogistics from "@/components/events-detail/EventLogistics";
import { Event } from "@/providers/EventRepository";
import EventSummary from "./EventSummary";

function EventContent(props: {items: Event[] }) {

    return (
        <>
                {props.items.map((detail) => (
                    <>
                    <EventSummary title={detail.title}/>
                    <EventLogistics
                            image={detail.image}
                            date={detail.date} 
                            location={detail.location}
                            description={detail.description}
                    />
                    </>
                ))}
        </>
    )
}

export default EventContent