import logo from './logo.svg';

function LatBalok() {
    let panjang = 10 ;
    let lebar = 5;
    let tinggi = 8
    let VolumeBalok = panjang * lebar * tinggi ; 
    return ( <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" />
        <div className="App">
        <h1>Selamat datang di LAT volume balok(9)</h1>
        <h5> panjang = 10 , lebar = 5,tinggi = 8 </h5>
        <h5>volume balok = Panjang * lebar * tinggi</h5>
        <h5>hasilnya adalah : {VolumeBalok}</h5>
        <a href="Home">Kembali ke home</a>
        </div>
        </header>
        </div>
    );
}
export default LatBalok;