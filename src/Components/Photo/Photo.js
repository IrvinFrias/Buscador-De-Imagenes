const Photo = (props) => {
    return(
        <article className="col-3 mx-2">
            <a href={props.html} target="_blank">
                <img className="w-100" src={props.img} alt={props.description}/>
            </a>
            <p>{props.author}</p>

            <p>{props.description}</p>

        </article>
    )
}
export default Photo;