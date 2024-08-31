import { Movies } from "./Movies"

function Movie (props){
    const{
        Title: title,
        Year: year,
        imdbId: id,
        Type: type,
        Poster: poster
    } = props

    return(
        <div id ={id} className="movie card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="poster" src={poster}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <p>{type}<span className ='right'>{year}</span></p>
    </div>
  </div>
    )

}
export {Movie}