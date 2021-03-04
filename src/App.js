import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogImage: '',
      dogName: '',
      loading: true
    }
  }

  async componentDidMount() {
    const myDog = localStorage.getItem('@DOGS:MyDogs');
    if (!myDog) {
      this.fetchDog();
    } else {
      const [{ dogName, dogImage }] = JSON.parse(myDog);
      this.setState({dogName, dogImage, loading: false })
    }
  }
  
  fetchDog = async () => {
    this.setState({ loading: true },
      async () => { 
        const { message } = await fetch('https://dog.ceo/api/breeds/image/random').then(r => r.json());
        
        if (message.includes('terrier')) return;

        let dogBreed = message.match(/\/[A-Za-z-]+\/(?![A-Za-z-]+\/)/);
        if (dogBreed) dogBreed = dogBreed[0].replaceAll('/','');   
        dogBreed && alert(dogBreed);
        
        this.setState({ 
          loading: false,
          dogImage: message,
          dogName: '',
        })}
        
    );    
  }

  handleOnChange = ({ target: { name, value }}) => {
    this.setState({
      [name]: value,
    })
  }

  handleOnClickSaveDog = () => {
    const { dogName, dogImage } = this.state;
    const dogs = [{ dogName, dogImage }];

    this.setState({dogName: ""},()=> {
      localStorage.setItem('@DOGS:MyDogs', JSON.stringify(dogs));
    })
  }

  render() {
    const { dogImage, loading } = this.state;

    return ( 
      <div className="App">
        <header className="App-header">
          { loading 
              ? <p>Loading...</p>
              : <img src={dogImage} className="App-logo" alt="logo" /> 
          }
        <div style={{ marginTop: 100 }}>
          <input name="dogName" value={this.state.dogName} onChange={this.handleOnChange} />
          <button type="button" onClick={this.handleOnClickSaveDog}>Save dog</button>
          <button  type="button" onClick={this.fetchDog}>Next</button>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
