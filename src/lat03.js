import logo from './logo.svg';

function Lat3() {
    
    let ucapan,waktuPagi ;
    waktuPagi = false
    if (waktuPagi) {
        ucapan = 'Selamat pagi!'
    } else {
        ucapan= 'selamat malam!'
    }

    return ( <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" />
        <div className="App">
        <h1>Selamat datang di LAT 3</h1>
        <p>ini if else guys!</p>
        <h1>{ucapan}</h1>
        <a href="Home">Kembali ke home</a>
        </div>
        </header>
        </div>
    );
}
export default Lat3;