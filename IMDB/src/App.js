import './App.scss';
import { useState } from 'react';
import axios from 'axios';


export default function Filme() {

    const[pagina,setPagina] = useState(1)
    const [filme, setFilme] = useState('');
    const [listafilme, setListafilme] = useState([]);
    const [filtro, setFiltro] = useState('');

    const escolherFiltro = (e) => {
        setFiltro(e.target.value);
    };


    async function buscar() {
        let url = `http://www.omdbapi.com/?i=tt3896198&apikey=c8de97bb&s=${filme}&type=${filtro}&page=${pagina}`;
        let busca = await axios.get(url);
        setListafilme(busca.data.Search);
    }

    function teclaEnter(e) {
        if (e.key == 'Enter')
            buscar();
    }

    function selecFiltro(e){
        setFiltro(e)
   
    }


    return (
        <div className='pagina-carro'>
            <header>
                <img src='/assets/images/logo.png' />
                <h1>Portifolio.me</h1>
            </header>
            <aside>
                <section>
                    <div className='logo'>
                        <img src='/assets/images/carro 1.png' />
                        <h3>IMDB</h3>
                    </div>

                    <div className='busca'>

                        <div className='inp1'>
                            <div>
                                <h2>Novo item</h2>
                                <input type='text' value={filme} onKeyUp={teclaEnter} onChange={e => setFilme(e.target.value)} ></input>
                            </div>

                            <button onClick={buscar}><img src='/assets/images/icon-buscar.png' /></button>
                        </div>

                        <div className='tabela'>
                            <table>
                                <thead>
                                    <tr className='titulo'>
                                        <th>Código</th>
                                        <th>Título</th>
                                        <th>Ano</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listafilme.map(item =>
                                        <tr>
                                            <td id='cdg'> {item.imdbID} </td>
                                            <td id='nm'> {item.Title} </td>
                                            <td id='ano'> {item.Year} </td>
                                            <img id='img' src={item.Poster}></img>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>


                    </div>
                    <select value={filtro} onChange={escolherFiltro}>
                        <option value="">Todos</option>
                        <option value="movie">Filme</option>
                        <option value="series">Série</option>
                        <option value="game">Jogo</option>
                    </select>

                </section>
            </aside>
        </div>
    )
}
