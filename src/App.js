import { useState } from "react";
import Chute from "./components/chute";
import Jogo from "./components/jogo";
import Letras from "./components/letras";
import palavras from "./palavras";

function App() {
  const [tentativas,setTentativas] = useState(0)
  const [chute,setChute] = useState("")
  const [palavraSorteada,setPalavraSorteada] = useState("")
  
  return (
    <>
    <Jogo 
    tentativas={tentativas} 
    setTentativas={setTentativas} 
    palavras={palavras}
    palavraSorteada={palavraSorteada}
    setPalavraSorteada={setPalavraSorteada}
    />
    <Letras
    palavraSorteada={palavraSorteada}
    setPalavraSorteada={setPalavraSorteada}
    />
    <Chute 
    chute={chute} 
    setChute={setChute}
    palavraSorteada={palavraSorteada}
    setPalavraSorteada={setPalavraSorteada}
    />
    </>
  );
}

export default App
