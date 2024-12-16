const CardExercise = (props) => {
    return (

        <div className="cardContainer">
            <img src={props.img}/>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
        </div>
        
    )
}

export default CardExercise