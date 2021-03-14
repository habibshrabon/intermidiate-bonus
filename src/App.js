
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const [users, setUsers] = useState([]);
  const [singelUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))

      //single user
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUser(data))

    //random user
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  }, [])

  const handelLike = () => {
    const color = likeColor ? '' : 'primary';
    setLikeColor(color);
  }
  return (
    <div>
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={handelLike} color={likeColor}></ThumbUpAltIcon>
      <h1>Name: {singelUser.name}</h1>
      <h2>Random Gender Name: {randomUser.name?.first}</h2>

      {
        users.map(user => <li>{user.name}</li>)
      }
      
     
    </div>
  );
}

export default App;
