import logo from './logo.svg';

function LatSkor() {
    let skor = 77;
    let nilai =
    (skor >= 86) ? 'A' 
    : (skor >= 81) ? 'A-' 
    : (skor >= 76) ? 'B+' 
    : (skor >= 71) ? 'B' 
    : (skor >= 66) ? 'B-' 
    : (skor >= 61) ? 'C+' 
    : (skor >= 56) ? 'C-' 
    : (skor >= 51) ? 'D' 
    : (skor <= 51) ? 'E' 
    : 'F'



    return ( <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" />
        <div className="App">
        <h1>Selamat datang di LAT Skor(10)</h1>
        <h5>{nilai}</h5>
        <a href="Home">Kembali ke home</a>
        </div>
        </header>
        </div>
    );
}
export default LatSkor;