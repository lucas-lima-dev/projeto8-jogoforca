export default function Chute({chutePalavra,setChutePalavra,jogoIniciado}) {

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
    function chutar() {
        // if() {

        // }
    }


    return (
        <div className="container-chute">
            <p>Já sei a palavra!</p>
            <input 
                value={chutePalavra} 
                onChange={pegarChute} 
                data-test ="guess-input"
            >
            </input>
            <button 
                disabled={!jogoIniciado}
                data-test ="guess-button"
            >
                Chutar
            </button>
        </div>
    )
}