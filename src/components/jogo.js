

export default function Jogo({
    erros,
    palavraMostrada,
    sortearPalavras,
    corGanhou,
    palavraSorteada
    }) {

    return (
        
        <div className="container-forca">
            <div className="forca">
                <img src={`assets/forca${erros}.png`} alt="" data-test ="game-image">
                
                </img>

            </div>
            <div className="box-escolherPalavra">
                
                <div  onClick ={sortearPalavras} className="escolherPalavra" data-test = "choose-word">
                <p>Escolher Palavra</p>
                </div>
                <div className="mostrarLetras" data-test ="word" data-answer ={palavraSorteada}>
                <p className={corGanhou} >{palavraMostrada}</p>
                </div>
            </div>
        </div>
    )
}