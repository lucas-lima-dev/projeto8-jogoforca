export default function Letras({palavraSorteada,setPalavraSorteada,letraClicada,setLetraClicada}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <div className="container-letras">
        {alfabeto.map((letra) => 
            <Letra 
                key={alfabeto[0]} 
                letra={letra} 
                letraClicada={letraClicada} 
                setLetraClicada={setLetraClicada}
            />)}
    </div>
  );
}


function Letra ({letra,letraClicada,setLetraClicada}) {
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
        // <div className={`box-letras`} data-test ="letter">
        //     <p>{letra.toUpperCase()}</p>
        // </div>
        <button 
            className={`botao-letras ${
                letraClicada.includes(letra) ? "selecionada" : ""
            }`} 
            onClick={()=>clicouLetra(letra)}
            
            data-test ="letter"
        >
            {letra.toUpperCase()}
            
        </button>
    )
} 

