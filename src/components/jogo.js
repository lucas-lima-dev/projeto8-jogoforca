

export default function Jogo({tentativas,setTentativas,palavras,palavraSorteada,setPalavraSorteada}) {
    

    
    
    function sortearPalavras() {
        palavraSorteada = palavras[Math.floor(Math.random()*palavras.length)]
        //transformar a palavraSorteada em um array de letras
        const letrasPalavraSorteada = palavraSorteada.split("")
    
        // setPalavraSorteada(letrasPalavraSorteada)
        //trocar cada letra por _
        setPalavraSorteada(letrasPalavraSorteada.map(()=>"_").join(" "))
        //mostrar na tela
    }

    function addPalavra() {

    }

    return (
        
        <div className="container-forca">
            <div className="forca">
                <img src={`assets/forca${tentativas}.png`} alt="" data-test ="game-image">
                {/* <img src={`assets/forca${tentativa}`} alt="forca0.png"> */}
                </img>

            </div>
            <div className="box-escolherPalavra">
                
                <div  onClick ={sortearPalavras} className="escolherPalavra" data-test = "choose-word">
                <p>Escolher Palavra</p>
                </div>
                <div className="mostrarLetras">
                <p data-test ="word">{palavraSorteada}</p>
                </div>
            </div>
        </div>
    )

        
}