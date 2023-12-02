import { useRouter } from "next/router";
import { filterEvent } from "@/providers/EventRepository";
import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultsTitle";

function FilteredEventsPage() {
    const router = useRouter()

    const filteredData = router.query.slug;

    if (!filteredData) {
        return <p className="center">Loading...</p>
    }

    const filteredYear = +filteredData[0]
    const filteredMonth = filteredData[1]

    if (
        isNaN(filteredYear) ||
        filteredYear > 2024 ||
        filteredYear < 2023
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
            <ResultsTitle yearQuery={filteredYear} monthQuery={filteredMonth}/>
            <EventList items={filteredEvents}/>
        </>
    )

}

export default FilteredEventsPage