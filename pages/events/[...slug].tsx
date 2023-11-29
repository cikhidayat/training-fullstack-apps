import { useRouter } from "next/router";
import { filterEvent } from "@/providers/EventRepository";
import EventList from "@/components/events/EventList";

function FilteredEventsPage() {
    const router = useRouter()

    const filteredData = router.query.slug;

    if (!filteredData) {
        return <p className="center">Loading...</p>
    }

    const filteredYear = +filteredData[0]
    const filteredMonth = +filteredData[1]

    if (
        isNaN(filteredYear) ||
        isNaN(filteredMonth) ||
        filteredYear > 2024 ||
        filteredYear < 2023 ||
        filteredMonth > 12 ||
        filteredMonth < 1
    ) {
        return <p className="center">Invalid Filter</p>        
    }

    const filteredEvents = filterEvent(filteredYear, filteredMonth)

    if (!filteredEvents) {
        return (
            <>
                <div className="center">
                    No events found!
                </div>
            </>
        )
    }

    return (
        <>
            <EventList items={filteredEvents}/>
        </>
    )

}

export default FilteredEventsPage