export default function Letras(props) {
    const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    return (
        <div className="container-letras">
            <div className="box-letras">
            <p>A</p>
            {/* {letras.map(() => <p key ={letras} />)} */}
            </div>
        </div>
        
    )
}