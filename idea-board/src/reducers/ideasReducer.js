import {
    ADD_IDEA,
    DELETE_IDEA,
    EDIT_IDEA
} from 'actions/types'

import dateParser from 'utils/dateParser'
import { bindActionCreators } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.2/node_modules/redux';

const now = new Date()

//THIS IS SO THAT ON APP LOAD, USER CAN SEE 1 DEFAULT CARD ALREADY VISIBLE FOR HIM
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
                // {
                //     id: state.reduce((maxId, idea) => Math.max(idea.id, maxId), -1) + 1,
                //     title: action.payload.title,
                //     description: action.payload.description,
                //     dateCreated: action.payload.dateCreated
                // }
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