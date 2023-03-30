import logo from './logo.svg';

function LatSegitiga() {
    let alas = 10 ;
    let tinggi = 5;
    let luasSegitiga = (1/2) * alas * tinggi ; 
    return ( <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" />
        <div className="App">
        <h1>Selamat datang di LAT luas segitiga(8)</h1>
        <h5> Alas = 10 , tinggi = 5 </h5>
        <h5>Luas segitiga = 1/2 * alas * tinggi</h5>
        <h5>hasilnya adalah : {luasSegitiga}</h5>
        <a href="Home">Kembali ke home</a>
        </div>
        </header>
        </div>
    );
}
export default LatSegitiga;