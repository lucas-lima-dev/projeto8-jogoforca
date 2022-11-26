import { useState } from "react";
import Chute from "./components/chute";
import Jogo from "./components/jogo";
import Letras from "./components/letras";
import palavras from "./palavras";


let palavraSorteada



function App() {
  const [tentativas,setTentativas] = useState(0)
  const [chutePalavra,setChutePalavra] = useState("")
  const [palavraSorteada,setPalavraSorteada] = useState("")
  const [letraClicada, setLetraClicada] = useState([]);

  

  
  return (
    <>
    <Jogo 
    palavras={palavras}
    tentativas={tentativas} 
    setTentativas={setTentativas} 
    palavraSorteada={palavraSorteada}
    setPalavraSorteada={setPalavraSorteada}
    />
    <Letras
    palavraSorteada={palavraSorteada}
    setPalavraSorteada={setPalavraSorteada}
    letraClicada={letraClicada}
    setLetraClicada={setLetraClicada}
    />
    <Chute 
    chutePalavra={chutePalavra} 
    setChutePalavra={setChutePalavra}
    palavraSorteada={palavraSorteada}
    setPalavraSorteada={setPalavraSorteada}
    />
    </>
  );
}

export default App
