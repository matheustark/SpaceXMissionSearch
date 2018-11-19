import axios from 'axios'

const urlSpacex = `https://api.spacexdata.com/v3/launches`

export function spacexCard(e){
    console.log('spacex')
    return {
        type: 'SPACEX_CARD',
        payload: e.target.card
    }
}