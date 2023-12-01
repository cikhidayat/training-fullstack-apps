import Link from "next/link";
import classes from "@/components/ui/button.module.css"

function LinkButton(props: {
    link: string;
    linkDesc: string
}) {
    const { link, linkDesc } = props
    
    return <Link href={link} className={classes.button}>{linkDesc}</Link>
}

export default LinkButton