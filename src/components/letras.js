export default function Letras({
    letraClicada,
    setLetraClicada,
    jogoIniciado,
    verificarErros
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
                verificarErros={verificarErros}
            />)}
    </div>
  );
}


function Letra ({letra,letraClicada,setLetraClicada,jogoIniciado,verificarErros}) {

    function lidarCliqueLetra(letra) {
        setLetraClicada([...letraClicada,letra])
        verificarErros(letra)
    }

    return (
        
        <button 
            disabled={!jogoIniciado || letraClicada.includes(letra)}
            className={`botao-letras`} 
            onClick={()=>lidarCliqueLetra(letra)}
            
            data-test ="letter"
        >
            {letra.toUpperCase()}
            
        </button>
    )
} 

