import classes from "@/components/events/results-title.module.css"
import LinkButton from "../ui/LinkButton"

function ResultsTitle(props: {yearQuery: number, monthQuery: string}) {
    const { yearQuery, monthQuery } = props

    return (
        <>
            <div>
                <h2 className={classes.title}>Search result for {yearQuery} {monthQuery}</h2>
                <div className={classes.title}>
                <LinkButton link="/events" linkDesc="Show All Events"/>
                </div>
            </div>
        </>
    )
}

export default ResultsTitle