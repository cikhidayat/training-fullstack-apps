import classes from "./event-summary.module.css"

function EventSummary(props: { title: string }) {
    const { title } = props
    
    return (
        <>
            <div className={classes.summary}>
                <h1>{title}</h1>
            </div>
        </>
    )
}

export default EventSummary