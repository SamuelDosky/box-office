

const Apptitle = (props) => {
    const {title = "Box Office" , subtitle = "are you looking for a movie or actor ?"} = props
    return (
        <div>
           <h1> {title} </h1>
           <p>  {subtitle} </p>
        </div>
    )
}

export default Apptitle