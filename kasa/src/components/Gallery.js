import Card from "./Card"
import logements from "../api/logements.json"
import './styles/Gallery.css'

function Gallery(){
    return(
        <div className = 'appartment-gallery'> 
            
                {logements.map(({title, cover})=>(
                    <Card
                    title={title}
                    cover={cover} 
                    />
                ))}
            
        </div>
        

    )
}

export default Gallery