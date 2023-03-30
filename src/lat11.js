import logo from './logo.svg';

function Lat11() {
    var bilangan = 1 ;
    while (bilangan<=13) {
        console.log(bilangan) ;
        bilangan++ ;
} 
    return ( <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" />
        <div className="App">
            <h1>Selamat datang di LAT 12</h1>
            <h3>{bilangan}</h3>
            <a href="Home"> kembali ke Home</a>
        </div>
        </header>
        </div>
    );
}
export default Lat11;