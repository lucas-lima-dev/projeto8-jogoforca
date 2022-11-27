

export default function Jogo({
    erros,
    palavraMostrada,
    sortearPalavras,
    corGanhou
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
                <div className="mostrarLetras">
                <p className={corGanhou} data-test ="word">{palavraMostrada}</p>
                </div>
            </div>
        </div>
    )
}