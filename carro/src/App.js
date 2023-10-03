import { useState } from 'react';
import './App.css';

function App() {

const[valort, setValort] = useState(0);
const[parcela, setParcela] = useState(0);
const[juros, setJuros] = useState(0);
const[resp, setResp] = useState(0);
const[respp, setRespp] = useState(0);


function Calcular(){

  let x = (valort * parcela * juros) 
  let y = x + valort

  setResp(y)

  setRespp(x)

}




  return (
    <div className="App">
      <div className='cabe'>
        <img src='/assets/image/XMLID_1336_.png'/>
        <h1>portifolio.com</h1>
      </div>



    <h1 className='tit'>Simulador de Compra de Veiculo</h1>

      <div className='cont'>

        <div className='left'>
          <img src='/assets/image/carro 2.png'/>
        </div>
<div className='bloco'>
      <div className='right'>
        <div className='sla'>
          <h1>Valor Total</h1>
          <input type='text' className='slaa' value={valort} onChange = {e => setValort( Number(e.target.value))}></input>
        </div>

        <div className=' sla2'>
          <div className='sla'>
            <h1>Parcelas</h1>
            <input type='text' value={parcela} onChange = {e => setParcela( Number(e.target.value))}></input>
          </div>
          <div className='sla'>
            <h1>Juros(%)</h1>
            <input type='number' step={'0.00'} value={juros} onChange = {e => setJuros((e.target.value))}></input>
          </div>
        </div>

        <button onClick={Calcular}>Calcular</button>
        <div>
          <h2> Parcela: </h2>
          <p> {respp} </p>
          <h2> Valor total:</h2>
          <p> {resp} </p>

        </div>
      </div>
    </div>  

      </div>
    </div>
  );
}

export default App;
