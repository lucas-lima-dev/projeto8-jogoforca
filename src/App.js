import { useState } from "react";
import Chute from "./components/chute";
import Jogo from "./components/jogo";
import Letras from "./components/letras";
import palavras from "./palavras";


let palavraSorteada 



function App() {
  const [erros,setErros] = useState(0)
  const [chutePalavra,setChutePalavra] = useState("")
  const [palavraMostrada,setPalavraMostrada] = useState("")
  const [letraClicada, setLetraClicada] = useState([]);
  const [jogoIniciado,setJogoIniciado] = useState(false)

  function sortearPalavras() {
    
    palavraSorteada = palavras[Math.floor(Math.random()*palavras.length)]

    //transformar a palavraSorteada em um array de letras
    const letrasPalavraSorteada = palavraSorteada.split("")
    //trocar cada letra por _
    
    //mostrar na tela
    setPalavraMostrada(letrasPalavraSorteada.map(()=>"_").join(" "))
    setJogoIniciado(true)
}

  
  return (
    <>
    <Jogo 
    palavras={palavras}
    erros={erros} 
    palavraMostrada={palavraMostrada}
    sortearPalavras={sortearPalavras}
    />
    <Letras
    palavraMostrada={palavraMostrada}
    setPalavraMostrada={setPalavraMostrada}
    letraClicada={letraClicada}
    setLetraClicada={setLetraClicada}
    jogoIniciado={jogoIniciado}
    />
    <Chute 
    chutePalavra={chutePalavra} 
    setChutePalavra={setChutePalavra}
    palavraMostrada={palavraMostrada}
    setPalavraMostrada={setPalavraMostrada}
    jogoIniciado={jogoIniciado}
    />
    </>
  );
}

export default App
