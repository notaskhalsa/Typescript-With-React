import React from 'react';
import './App.css';
import { IEpisodes, IAction } from './interfaces';
import { Store } from './store';


// export default function App(){
//   return(
//     <h1>Hlo World</h1>
//   );
// }


export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL ="https://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    console.log(dataJSON)
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };


  const toggleFavAction = (episode: IEpisodes): IAction => {
    const episodeInFav = state.favourites.includes(episode)
    let dispactchObj = {
      type: 'ADD_FAV',
      payload: episode
    }
    
    if(episodeInFav){
      const favWithoutEpisode = state.favourites.filter((fav: IEpisodes) => fav.id !== episode.id)
      dispactchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode
      }
    }
    
    return dispatch(dispactchObj);
  }
  console.log(state);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick And Morty</h1>
          <p>Pick your fav episode!!</p>
        </div>
        <div id="favourites">
          Favourite(s): {state.favourites.length}
        </div>
      </header>
      <section className="episode-layout">
        
      </section>
    </React.Fragment>
  );
}
