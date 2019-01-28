import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'actions'
import ShowOrEdit from 'components/ShowOrEdit';
import { editIdea } from './../actions/index';
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
            <li> 
                <ShowOrEdit name='title' label={idea.title || ''} sendValueUp={this.getInputValue}/>
                <br />
                <ShowOrEdit name='description' label={idea.description || ''} sendValueUp={this.getInputValue}/>
                <br />
                {dateParser(idea.dateCreated)}
                <button className='delete-btn' 
                    onClick={this.props.handleDelete.bind(null,idea.id)}>
                    [X]
                </button> 
            </li>
        )
    }
 
}

IdeaCard.propTypes = {
    idea: PropTypes.object.isRequired
}

export default connect(null, actions)(IdeaCard);





