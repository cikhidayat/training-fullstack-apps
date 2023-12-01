import { useRef } from "react";
import button from "@/components/ui/button.module.css"
import classes from "./events-search.module.css";

function EventSearch(props: { onSearch: (year: number, month: string)=> void
}) {
    const yearRef = useRef<HTMLSelectElement>(null);
    const monthRef = useRef<HTMLSelectElement>(null);

    function submitHandler(event: React.FormEvent<any>) {
        event.preventDefault()

        const selectedYear = yearRef.current?.value || 0;
        const selectedMonth = monthRef.current?.value || "";

        props.onSearch(+selectedYear, selectedMonth)
    }

    return (
        <>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="year">Year</label>
                        <select name="year" id="year" ref={yearRef}>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="month">Month</label>
                        <select name="month" id="month" ref={monthRef}>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>
                    <button className={button.button}>Search</button>
                </div>
            </form>
        </>
    )
}

export default EventSearch