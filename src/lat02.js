import logo from "./logo.svg";

function Lat2() {
  let ucapan;
  ucapan = "Selamat pagi guys!";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App">
          <h1>Selamat datang di LAT 2</h1>
          <h1> {ucapan} </h1>
          <a href="Home"> kembali ke Home</a>
        </div>
      </header>
    </div>
  );
}
export default Lat2;
