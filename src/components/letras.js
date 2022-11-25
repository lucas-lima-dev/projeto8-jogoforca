export default function Letras({palavraSorteada,setPalavraSorteada}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  //Ao clicar em qualquer letra para chutar:
  //SE a letra clicada.includes(array de letras da palavra sorteada) 
  //troque o _ pela letra clicada onde tiver na posiçao da palavra sorteada 
  //SENAO
  //mostre a proxima imagem da forca
  function checarLetra() {


  }

  return (
    <div className="container-letras">
        {alfabeto.map((letra) => <Letra key={alfabeto} letra={letra}/>)}
    </div>
  );
}


function Letra ({letra}) {
    return (
        <div className="box-letras" data-test ="letter">
            <p>{letra.toUpperCase()}</p>
        </div>
    )
} 

