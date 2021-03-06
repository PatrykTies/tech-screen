import {
    ADD_IDEA,
    DELETE_IDEA,
    EDIT_IDEA
} from 'actions/types'

//THIS IS SO THAT ON APP LOAD, USER CAN SEE 1 DEFAULT CARD ALREADY VISIBLE FOR A USER
const initialState = [
    {
        id: 0,
        title: 'Add title here...',
        description: 'Write about your idea...'      
    }
]

export default function ideasReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_IDEA:
            return [
                ...state,         
                {
                    id: state.reduce((maxId, idea) => Math.max(idea.id, maxId), -1) + 1,
                    ...action.payload
                }
               
            ]
        case EDIT_IDEA:
            return state.map(idea=>
                idea.id === action.payload.id ?
                {...idea, 
                    ...action.payload
                } 
                :
                idea
            )
        case DELETE_IDEA:       
            return state.filter(idea => {
                return idea.id !== action.payload
            });     
        default:
            return state
    }
}