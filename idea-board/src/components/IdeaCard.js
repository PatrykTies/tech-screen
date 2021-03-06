import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'actions'
import ShowOrEdit from 'components/ShowOrEdit';
import dateParser from 'utils/dateParser';



class IdeaCard extends Component{


    getInputValue = (input, inputName) =>{   
        
        const editedIdea = {
            id: this.props.idea.id,
            title: this.props.idea.title || '',
            description: this.props.idea.title || '',
            dateCreated: Date.now()
        }

        const editedProp = { ...editedIdea, [inputName]: input}
      
        this.props.editIdea(editedProp)  
    }

    render(){
        
        const { idea } = this.props; 

        return (
            <li className='content-wrapper'> 
                <ShowOrEdit name='title' label={idea.title || ''} sendValueUp={this.getInputValue}/>
                <br />
                <ShowOrEdit name='description' label={idea.description || ''} sendValueUp={this.getInputValue}/>
                <br />
                <h5 className='timestamp-wrapper'>Last updated at: {dateParser(idea.dateCreated)}</h5>
                <button className='delete-btn' 
                    onClick={this.props.handleDelete.bind(null,idea.id)}>
                    REMOVE
                </button> 
            </li>
        )
    }
 
}

IdeaCard.propTypes = {
    idea: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        description: PropTypes.string,
        dateCreated: PropTypes.number
    }).isRequired,
    editIdea: PropTypes.func.isRequired
}

export default connect(null, actions)(IdeaCard);





