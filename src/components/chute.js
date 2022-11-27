export default function Chute({chutePalavra,setChutePalavra,jogoIniciado,verificarChute}) {

    // Ao clicar no botao chutar:
    //Pegar a palavra digita 
    //SE a palavra digita === palavra sorteada
    //mostar a palavra sorteada
    //adicionar a classe ganhou na palavra
    //SENAO 
    //mostar a palavra sorteada
    //adicionar a classe perdeu na palavra
    //mostrar a figura 6
    
    function pegarChute(e) {
        setChutePalavra(e.target.value)

    }
    
    return (
        <div className="container-chute">
            <p>Já sei a palavra!</p>
            <input 
                disabled={!jogoIniciado}
                value={chutePalavra} 
                onChange={pegarChute} 
                data-test ="guess-input"
            >
            </input>
            <button 
                disabled={!jogoIniciado}
                data-test ="guess-button"
                onClick={verificarChute}
            >
                Chutar
            </button>
        </div>
    )
}