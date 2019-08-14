import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id':'react1',
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동전',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '의적'
},
{
  'id':'react2',
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '임꺽정',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '의적?'
},
{
  'id':'react3',
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김선달',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '사기꾼'
},
]

class App extends Component {
  render(){
    return (
      <div>
        { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ) }) }
        </div>
    );
  }
}

export default App;
