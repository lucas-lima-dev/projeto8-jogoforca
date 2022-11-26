export default function Letras({
    palavraMostrada,
    setPalavraMostrada,
    letraClicada,
    setLetraClicada,
    jogoIniciado,
    setJogoIniciado
    }) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <div className="container-letras">
        {alfabeto.map((letra) => 
            <Letra 
                key={alfabeto[0]} 
                letra={letra} 
                letraClicada={letraClicada} 
                setLetraClicada={setLetraClicada}
                jogoIniciado={jogoIniciado}
            />)}
    </div>
  );
}


function Letra ({letra,letraClicada,setLetraClicada,jogoIniciado,setJogoIniciado}) {
//Ao clicar em qualquer letra para chutar:
  //SE a letra clicada.includes(array de letras da palavra sorteada) 
  //troque o _ pela letra clicada onde tiver na posiçao da palavra sorteada 
  //SENAO
  //mostre a proxima imagem da forca

    function clicouLetra(letraSelecionada) {
        const estaNaLista = letraClicada.includes(letraSelecionada)

        if(!estaNaLista) {
            setLetraClicada([...letraClicada,letraSelecionada])
        }
        
    }

    return (
        
        <button 
            disabled={!jogoIniciado || letraClicada.includes(letra)}
            className={`botao-letras`} 
            onClick={()=>clicouLetra(letra)}
            
            data-test ="letter"
        >
            {letra.toUpperCase()}
            
        </button>
    )
} 

