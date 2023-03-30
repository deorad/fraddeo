import logo from './logo.svg';

function Lat5() {
    
    let x = 4 
    return ( <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" />
        <div className="App">
        <h1>Selamat datang di LAT 5</h1>
        <p>Ini ekspresi untuk menghitung operasi matematika !</p>
        
        { `10 + 10 = ${10+10}`} <br />
        <a href="Home">Kembali ke home</a>
        </div>
        </header>
        </div>
    );
}
export default Lat5;