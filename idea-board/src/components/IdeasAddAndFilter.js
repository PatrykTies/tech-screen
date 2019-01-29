import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'actions'
import * as types from 'actions/types'
import FilterButton from 'components/FilterButton'



const FILTER_TITLES = {
    [types.BY_DATE]: 'Sort by Latest',
    [types.BY_TITLE]: 'Sort by Title',
    [types.SHOW_ALL]: 'Reset Filter'
}
const FILTER_ICONS = {
    [types.BY_DATE]: 'fas fa-history',
    [types.BY_TITLE]: 'fas fa-sort-alpha-down',
    [types.SHOW_ALL]: 'fas fa-list-ul'
}

class IdeasAddAndFilter extends Component {

    state={
        isMenuActive: false,
    }

    handleClick = () => { 
       
        //THIS STARTING INPUT DEFAULT TEXT FOR EACH IDEA CARD
        const initialValues = { 
            title: 'Add title here...', 
            description: 'Write about your idea...',
            dateCreated: Date.now()
        }
        this.props.addIdea(initialValues)
    }

    toggleMenu = (e) => {
        e.preventDefault()
        this.setState(   
            {isMenuActive: !this.state.isMenuActive}
        )
        
    }

    render() {
       
        return (
        <div className='fab-container'>

            <button className='fab fab-icon-menu' onClick={this.toggleMenu}>
                    <i className='fas fa-bars'></i>
            </button>
                

                {this.state.isMenuActive ?
                
                    <ul className='fab-options'>
                        <div className='fab-add'>
                            <span className='fab-label'>ADD</span>
                            <button className='fas fab-icon-holder-add' onClick={this.handleClick}>
                            <i className='fas fa-plus-square'></i></button>
                        </div>
                        {Object.keys(FILTER_TITLES).map(filter => (
                            <li key={filter}>
                                <span className='fab-label'>{FILTER_TITLES[filter]}</span>
                                <FilterButton filter={filter}>  
                                    <i className={FILTER_ICONS[filter]}></i>
                                </FilterButton>
                            </li>
                        ))}
                    </ul>
                    :''
                       
                }
             
        </div>
        )
    }
}

IdeasAddAndFilter.propTypes = {
    addIdea: PropTypes.func.isRequired
}

export default connect(null, actions)(IdeasAddAndFilter);


