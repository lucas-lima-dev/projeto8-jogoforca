export default function Letras() {
  const letras = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="container-letras">
        {letras.map((letra) => <Letra letra={letra}/>)}

       {/* {letras.map((letra) => (
        <div className="box-letras">
          <p>{letra}</p>
        </div>
      ))}  */}
      
    </div>
  );
}


function Letra (props) {
    return (
        <div className="box-letras">
            <p>{props.letra}</p>
        </div>
    )
} 

