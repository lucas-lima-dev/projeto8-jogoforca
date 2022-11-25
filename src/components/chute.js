export default function Chute({chute,setChute}) {

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
        setChute(e.target.value)

    }
    function chutar() {
        // if() {

        // }
    }


    return (
        <div className="container-chute">
            <p>Já sei a palavra!</p>
            <input value={chute} onChange={pegarChute} data-test ="guess-input"></input>
            <button data-test ="guess-button">
                Chutar
            </button>

        </div>
    )
}