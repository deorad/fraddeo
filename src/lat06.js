import logo from './logo.svg';

function Lat6() {
    
    return ( <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" />
        <div className="App">
        <h1>Selamat datang di LAT 6</h1>
        <p>Ini adalah list item !</p>
        <ul>
            <li>ini li 1</li> 
            <li>ini li 2</li>
            <li>ini li 3</li>
        </ul>
        <br />
        <a href="Home">Kembali ke home</a>
        </div>
        </header>
        </div>
    );
}
export default Lat6;