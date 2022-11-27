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
  const [corGanhou,setCorGanhou] = useState("")
  

   if(jogoIniciado) {
    
    if(!palavraMostrada.includes("_")) {
      setCorGanhou("ganhou")
      setJogoIniciado(false)
    }
    if(erros===6) {
      setPalavraMostrada(palavraSorteada)
      setCorGanhou("perdeu")
      setJogoIniciado(false)
    }

   }

   function verificarChute() {
    if(chutePalavra !== palavraSorteada) {
      setErros(6)
      setPalavraMostrada(palavraSorteada)
      setCorGanhou("perdeu")
    }else {
      setPalavraMostrada(palavraSorteada)
      setCorGanhou("ganhou")
    }
   }

  function sortearPalavras() {
    
    palavraSorteada = palavras[Math.floor(Math.random()*palavras.length)]

    //transformar a palavraSorteada em um array de letras
    const letrasPalavraSorteada = palavraSorteada.split("")
    //trocar cada letra por _
    
    //mostrar na tela
    setPalavraMostrada(letrasPalavraSorteada.map(()=>"_").join(" "))
    setJogoIniciado(true)
}

  function verificarErros(letra) {
  //Ao clicar em qualquer letra para chutar:
  //SE a letra clicada.includes(array de letras da palavra sorteada)
   if(palavraSorteada.includes(letra)){
    //troque o _ pela letra clicada onde tiver na posiçao da palavra sorteada 
    const arrayPalavraMostrada = palavraMostrada.split(" ")
    const arrayPalavraSorteada = palavraSorteada.split("")
    const indicesDaLetraAcertada = []
    arrayPalavraSorteada.forEach((char,index)=> {
      if(char ===letra) {
        indicesDaLetraAcertada.push(index)
      }
    })
    setPalavraMostrada(
      arrayPalavraMostrada.map((char,index)=>{
        if(indicesDaLetraAcertada.includes(index)){
          return letra
        } 
        return char
      }).join(" ")
    )
    
   } else {
    setErros(erros+1)
   }
  }

  return (
    <>
    <Jogo 
    palavras={palavras}
    erros={erros} 
    palavraMostrada={palavraMostrada}
    sortearPalavras={sortearPalavras}
    corGanhou={corGanhou}
    />
    <Letras
    letraClicada={letraClicada}
    setLetraClicada={setLetraClicada}
    jogoIniciado={jogoIniciado}
    verificarErros={verificarErros}
    />
    <Chute 
    chutePalavra={chutePalavra} 
    setChutePalavra={setChutePalavra}
    palavraMostrada={palavraMostrada}
    setPalavraMostrada={setPalavraMostrada}
    jogoIniciado={jogoIniciado}
    verificarChute={verificarChute}
    />
    </>
  );
}

export default App
