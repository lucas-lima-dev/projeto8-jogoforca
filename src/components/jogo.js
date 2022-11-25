

export default function Jogo({tentativas,setTentativas,palavras,palavraSorteada,setPalavraSorteada}) {
    

    
    
    function sortearPalavras() {
        // palavraSorteada = funcao para sortear a (palavras)
        //transformar a palavraSorteada em um array de letras
        //trocar cada letra por _
        //mostrar na tela
    }

    function addPalavra() {

    }

    return (
        
        <div className="container-forca">
            <div className="forca">
                <img src={`assets/forca${tentativas}.png`} alt="">
                {/* <img src={`assets/forca${tentativa}`} alt="forca0.png"> */}
                </img>

            </div>
            <div className="box-escolherPalavra">
                
                <div  onClick ={sortearPalavras} className="escolherPalavra">
                <p>Escolher Palavra</p>
                </div>
                <div className="mostrarLetras">
                <p>_ _ _ _ _ _ _ _ _ _ _ _</p>
                </div>
            </div>
        </div>
    )

        
}