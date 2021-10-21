import logo from './logo.svg';
import './App.css';
import picture from './pinterest.jpg';
import './style.css';
import video from './Introduction.mp4';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{border:'1px solid black',fontSize:1 ,color:'black',maxWidth:100}}/>

<h1 class="title red">Your name here</h1>

<img src={picture} width = '250px' height = '250px'/>

<img src="/5-avantages.jpg" width="250px" height="250px"alt="myImage"/>

<img src={"/imageInPublic.jpg"} />

<video width="320" height="240" controls>
<source src={video} type="video/mp4" />
</video>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
