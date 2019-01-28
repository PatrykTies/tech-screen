import { createSelector } from 'reselect'
import { SHOW_ALL, BY_DATE, BY_TITLE } from 'actions/types'


const getVisibilityFilter = state => state.visibilityFilter
const getIdeas = state => state.ideas

export const getVisibleIdeas = createSelector(
    [getVisibilityFilter, getIdeas],
    (visibilityFilter, ideas) => {
        switch (visibilityFilter) {
            case SHOW_ALL:
                return ideas
            case BY_DATE:
                return ideas.sort((a,b) => b.dateCreated - a.dateCreated)
            case BY_TITLE:
                return ideas.sort((a,b)=>a.title.localeCompare(b.title))
            default:
                throw new Error('Unknown filter: ' + visibilityFilter)
        }
    }
)

