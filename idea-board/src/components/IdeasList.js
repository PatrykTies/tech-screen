import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types'
import IdeaCard from 'components/IdeaCard';
import { deleteIdea } from 'actions'
import { getVisibleIdeas } from 'selectors'
import * as types from 'actions/types'


const FILTER_TITLES = {
    [types.BY_DATE]: 'Ideas by Latest',
    [types.BY_TITLE]: 'Ideas by Title',
    [types.SHOW_ALL]: 'All your cool ideas'
}

class IdeasList extends Component {

    handleDelete = (id) =>{
       this.props.deleteIdea(id)    
    }

    renderIdeas = (filteredIdeas) => 
        (
            filteredIdeas.map(idea => 
                
                    <div key={idea.id} className='card-wrapper'>         
                        <IdeaCard idea={idea} handleDelete={this.handleDelete}/>         
                    </div> 
               
            )
        )
    

    render() {
        const { filteredIdeas, visibilityFilter } = this.props
        return (
        <div>
            <h1 className='header'>{FILTER_TITLES[visibilityFilter]}</h1>
                
                <ul className='main-wrapper'>
                    <ReactCSSTransitionGroup
                        transitionName='fade' 
                        transitionEnterTimeout={500} 
                        transitionLeaveTimeout={500}  
                    >
                        {this.renderIdeas(filteredIdeas)}
                    </ReactCSSTransitionGroup> 
                </ul>
                
           
            
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        filteredIdeas: getVisibleIdeas(state),
        visibilityFilter: state.visibilityFilter
    }
}


IdeasList.propTypes = {
    filteredIdeas: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        description: PropTypes.string,
        dateCreated: PropTypes.number
    }).isRequired).isRequired,
    deleteIdea: PropTypes.func.isRequired,
    visibilityFilter: PropTypes.string.isRequired
}

export default connect(mapStateToProps, {deleteIdea})(IdeasList);
