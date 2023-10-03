import { useState } from 'react';
import './index.scss';
import axios from 'axios'



function App() {

  const[filme, setFilme] = useState('')
  const[filmes, setFilmes] = useState([])  

  async function Buscarfilme(){
    let url = 'http://www.omdbapi.com/?apikey=37d7cf75&s=' + filme

    let r = await axios.get(url)

    setFilmes(r.data.Search)
  }



  return (
    <div className="App">

      <div className='nsei'>
        <div className='cabe'>
          <div className='esq'>
            <img src='/assets/images/logo.svg'/>
            <h1>Portifolio</h1>
            <p>inicio</p>
            <p>filmes</p>
            <p>series</p>
            <p>bombando</p>
            <p>minha lista</p>
          </div>

          <div className='dir'>
            <div className='input'>
              <input type='text' value={filme} onChange={e => setFilme(e.target.value)}></input>
              <button onClick={Buscarfilme}>
                <img src='/assets/images/icon-buscar.svg' />
              </button>
            </div>
            <h1>Greenfield</h1>
            <img src='/assets/images/material-symbols_notifications-outline-sharp.svg'></img>
            <img src='/assets/images/image 5.png' />
            <img src='/assets/images/bxs_up-arrow.svg' />
          </div>
        </div>

        <div className='cont'>
          <h1>friends</h1>
          <p>Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.</p>
          <button>Assistir</button>


          <h2>Resultado de busca</h2>
        </div>

        <div className='cen'>

        

          {filmes.map(item =>

              <div className='catalogo'>

                <div className='pt' >
                  <img className='fil' src={item.Poster} title={item.Title}/>

                </div>
                

              </div>

              )}

        </div>

      </div>
    </div>
  );
}

export default App;