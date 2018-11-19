const INITIAL_STATE = { cards: 'teste' }

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'SPACEX_CARD':
            return { cards: action.payload }
        default:
            return state
    }
}