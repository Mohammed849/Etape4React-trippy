import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }
  componentDidMount() {
    const url = 'http://localhost:3001/api/home';
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log('json');
        // console.log('json', json);
        const cities = json.cities;
        // console.log(cities);
        this.setState({
          cities,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.cities.map((city) => {
          return (
            <div>
              <p>{city.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
