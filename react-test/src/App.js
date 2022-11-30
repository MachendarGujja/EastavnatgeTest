import './App.css';
import RefreshIcon from '@mui/icons-material/Refresh';
import {useEffect,useState} from 'react';
import axios from 'axios';
import UserList from './UserList';

function App() {
  const [list, setList] = useState([])
  const [btn, setBtn] = useState(false)
  
  useEffect(() => {
    const apiIntegration=async()=>{
      const userData = await axios.get('https://randomuser.me/api')
      // console.log(userData)
      const [first]=await userData.data.results;
      // console.log(first);
      const {name,email,id}= first;
      const data = {name,email,id}
      // console.log(first)
      setList([...list,data]);
    }
    apiIntegration()
// eslint-disable-next-line
  }, [btn]) 
  console.log(list);
  return (
    <div className="App">
      <div className='btn-style'>
      <button title='Refresh' style={{backgroundColor:'transparent',border:'none',cursor:'pointer'}} onClick={()=>setBtn(!btn)}><RefreshIcon style={{height:37,width:27}} /></button>
      </div>
      {list &&
      <ul className='middle-style'>
        
        {
        list.map((e)=>
        <UserList user={e} key={e.id.value}/>
        )}
        </ul>
      }
    </div>
  );
}

export default App;
