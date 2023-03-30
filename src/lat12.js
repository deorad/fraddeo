import logo from './logo.svg';

function Lat12() {
    var bilangan = 2 ;
    while (bilangan<=20) {
        console.log(bilangan)
        bilangan= bilangan + 2 
    }  
    return ( <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" />
        <div className="App">
            <h1>Selamat datang di LAT 13</h1>
            <h3>{bilangan}</h3>
            <a href="Home"> kembali ke Home</a>
        </div>
        </header>
        </div>
    );
}
export default Lat12;