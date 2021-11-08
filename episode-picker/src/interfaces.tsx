/**
 *      Interfaces
 */

export interface IEpisodes{
    airdate: string
    airstamp: string
    airtime: string
    id: number
    image: string
    name: string
    number: number
    rating: {average: number}
    runtime: number
    season: number
    summary: string
    type: string
    url: string
  }
  
export interface IState {
    episodes: Array<IEpisodes>,
    favourites: Array<any>
};

export interface IAction{
    type: string,
    payload: any
};