    import React, { useState } from 'react';
    import './style.css';

    // Elemento jsx
    const elemento = <div> <h1>Jogo</h1> </div>
    
    //Elemento sem jsx
    const elemento2 = React.createElement('div', null, React.createElement('h2', null, 'Busca Binária'))

    // Componente Function Component
    function App () {

    //ENTRADA, RODANDO, FIM
    const [estado, setEstado] = useState('ENTRADA')
    
    //Palpite
    const [palpite, setPalpite] = useState(150)
    const [numPalpites, setNumPalpites] = useState(1)

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(300)
    
    const iniciarJogo = () => {
    setEstado('RODANDO')
    setMin(0)
    setMax(300)
    setNumPalpites(1)
    setPalpite(150)
    }
    if(estado === 'ENTRADA'){
    return<header className="App-header3"> <button onClick={iniciarJogo} type="button" class="btn btn-outline-danger">Começar a jogar!</button></header> 
}
    const menor = () => {
    setNumPalpites(numPalpites + 1)
    setMax(palpite)   
    const proxPalpite = parseInt((palpite - min) / 2) + min
    setPalpite(proxPalpite)
}

    const maior = () => {
    setNumPalpites(numPalpites + 1)
    setMin(palpite)
    const proxPalpite = parseInt((max - palpite)/2) + palpite
    setPalpite(proxPalpite)
} 
    const acertou = () => {
    setEstado('FIM')
}
    if (estado === 'FIM'){
    return (
    <div ClassName="App1">
    <section className="App-header1">
    <p>Acertei o número {palpite} com {numPalpites} chutes!</p>
    <button onClick= {iniciarJogo} type="button" class="btn btn-outline-danger">
    Iniciar novamente!
    </button>
    </section>
    </div>
    )
    }
    
    return (
    <div className="App">
    <header className="App-header">
    {elemento}
    {elemento2}
    <p>Acertei o número é {palpite}? </p>
    <p>Min: {min} / Max: {max}</p>
    <hr/>
    <div className="Section">

    <div id="bt_1"> 
    <button onClick={menor} type="button" class="btn btn-outline-danger">
        Menor
    </button>
    </div>
    <hr/>

    <div id="bt_2">
    <button onClick={acertou} type="button" class="btn btn-outline-danger">
        ok
    </button>
    </div>
    <hr/>

    <div id="bt_3">
    <button onClick={maior} type="button" class="btn btn-outline-danger">
        Maior
    </button>
    </div>
    
    </div>
    </header>
    </div>
    )
    }
    export default App;
