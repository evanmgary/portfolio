import Image from "next/image"
import Link from "next/link"
export function ProjectCardSm(){

    return(
        <div className="project-card-sm">
            <Link href={props.link}>
                <Image alt={""} src={props.location}/>
                <h3>{props.title}</h3>
            </Link>
        </div>
    )
}

export function ProjectCardLg(){

    return(
        <div className="project-card-lg">
            <Link href={props.link} >
                <Image alt={""} src={props.location}/>
                <h3>{props.title}</h3>
            </Link>
        </div>
    )
}

