import Login from "./components/Login";
import {useEffect} from 'react'
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constants";
import Spotify from "./components/Spotify";

export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash= window.location.hash
    const scope = 'playlist-read-private'
    if(hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1]
      // console.log(token)
      dispatch({type: reducerCases.SET_TOKEN, token, scope})
    }
  },[token, dispatch])
  return (
    <div>
      {token ? <Spotify />: <Login />}
    </div>
  );
}
