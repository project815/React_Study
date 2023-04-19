// import logo from './logo.svg';
//퍼블릭으로 이미지를 옮기면 경로로도 사용가능!
//두 가지 방법을 두루두루 사용하자!

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React & Firebase
        </a>
      </header>
    </div>
  );
}

export default App;
