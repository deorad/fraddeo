import logo from './logo.svg';

function Lat4() {
    
    let x = 4 
    return ( <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" />
        <div className="App">
        <h1>Selamat datang di LAT 4</h1>
        <p>ini ternari guys!</p> 
        <span>x = 4</span><br/>
        <span>{'x < 10'}</span>
        <h1> {(x) < 10 ? "benar" : "salah" } </h1>
        <a href="Home">Kembali ke home</a>
        </div>
        </header>
        </div>
    );
}
export default Lat4;