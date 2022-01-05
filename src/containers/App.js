import React,{Component} from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component{
  constructor(){
    super()
    this.state = {
      roleList: [],
      searchfield: ''
    }

    console.log('constructor')
  }

  componentDidMount(){
    fetch('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json')
    .then(resp => {return resp.json()})
    .then(roleArr => this.setState({roleList: roleArr}))

    console.log('componentDidMount')
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render(){
    console.log('render')

    const {roleList,searchfield} = this.state
    const filterRoles = roleList.filter(role => role.name.toLowerCase().includes(searchfield.toLowerCase()))
    return !roleList.length ? <h1 className='tc gold f1'>Loading</h1> :
      <div className='tc'>
        <h1 className='f1 gold'>StarWars Role Search</h1>
        <SearchBox searchEvent={this.onSearchChange}/>
        <ErrorBoundary>
          <Scroll>
            <CardList roleList={filterRoles}/>
          </Scroll>
        </ErrorBoundary>
      </div> 
  }
}

export default App;
