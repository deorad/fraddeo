import logo from "./logo.svg";

function Lat10() {
  let a = 5;
  let b = 12;
  let c = Math.sqrt(a * a + b * b);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App">
          <h1>Selamat datang di LAT 11</h1>
          <h5>a = 2 , b = 3 </h5>
          <h5>c^2 = a^2 + b^2</h5>
          <h5> hasil nya adalah = {c} </h5>
          <a href="Home"> kembali ke Home</a>
        </div>
      </header>
    </div>
  );
}
export default Lat10;
