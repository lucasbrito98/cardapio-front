import "./card.css"

interface CardProps{
    preco: number,
    texto: string,
    imagem: string


}
 
export function Card({preco,imagem,texto} : CardProps){
    return(
        <div className="card">
            <img src={imagem}/>
            <h2>{texto}</h2>
            <p><b>Valor:</b>{preco}</p>
        </div>
    
    )
}