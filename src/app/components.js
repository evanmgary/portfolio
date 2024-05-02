import Image from "next/image"
import Link from "next/link"
import "./styles.css"
export function ProjectCardSm(props){

    return(
        <div className="project-card-sm">
            <Link href={props.link}>
                <div className="image-container">
                    <Image className="sm-image" alt={""} src={props.location} fill={true}/>
                </div>
                <h3>{props.title}</h3>
            </Link>
            <div className="card-desc-sm">{props.desc}</div>
        </div>
    )
}

export function ProjectCardLg(props){

    return(
        <div className="project-card-lg">
            <Link href={props.link} >
                <div className="image-container">
                    <Image className="lg-image" alt={""} src={props.location} fill={true}/>
                    <h3>{props.title}</h3>
                </div>
            </Link>
            <div className="card-desc-lg">{props.desc}</div>
        </div>
        
    )
}

