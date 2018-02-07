export const GET_GIFS = 'GET_GIFS';
export const GET_GIFS_SUCCESS = 'GET_GIFS_SUCCESS';
export const GET_GIFS_FAILURE = 'GET_GIFS_FAILURE';


export function getGifs(data){
    return {
        type: 'GET_GIFS',
        payload: {}
    }
}