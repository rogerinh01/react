
import './App.css';
import { useState } from 'react';

function App() {

const [casca,setCasca] = useState('sorvete')
const [preco,setPreco] = useState('')
const [totais, setTotais] = useState('')
const [total,setTotal] = useState(0)
const [Sorvetes, setSorvetes] = useState ([])

function adicionar() {

  let Sorv = {
    sorvete : casca,
    valor : preco

  }

  setSorvetes( [...Sorvetes, Sorv])

  setTotais( [...totais, total])

  let b = preco

  for ( let item of totais){

    b = b + item

  };


 setTotal(b)
  

}





  return (
    <div className="page-ice">

      <div className='cabe'>
        <img src='/assets/images/XMLID_1336_.png'/>
        <h1>portifolio.com</h1>
      </div>

<div className='prin'>
      <div className='cubo'>

        <div className='cima'>
          <h1>Sorveteria</h1>
        </div>

        <div className='baixo'>

          <h1> Novo item </h1>

          <div className='lado'>
            
            <input type='text' value={casca} onChange={ e => setCasca(e.target.value)}></input>
            <div>
              <h1>R$</h1>
              <input type='number' value={preco} onChange={e => setPreco( Number(e.target.value))}></input>
            </div>

            <button onClick={adicionar}> Adicionar</button>
          </div>

          <div className='soma'>
            <h1>Lista de Compras</h1>
            <p> total de:{total} </p>
          </div>
          </div>


          
          <div className='sla'>
                            {Sorvetes.map(item =>
                                <div className='itens'>
                                    <h1>{item.sorvete}</h1>
                                    <h1>{item.valor}</h1>
                                </div>
                                )}
             
          </div>

        </div>

      </div>
     
    </div>
  );
}

export default App;
