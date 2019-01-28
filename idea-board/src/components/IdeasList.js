import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import IdeaCard from 'components/IdeaCard';
import { deleteIdea } from 'actions'
import { getVisibleIdeas } from 'selectors'
import { visibilityFilter } from 'reducers/visibilityFilter';

class IdeasList extends Component {

    handleDelete = (id) =>{
        this.props.deleteIdea(id)
    }

    renderIdeas = (filteredIdeas) => 
        (
            filteredIdeas.map(idea => 
                <section key={idea.id}>
                    <IdeaCard idea={idea} handleDelete={this.handleDelete}/>  
                </section>    
            )
        )
    

    render() {
        const { filteredIdeas, visibilityFilter } = this.props
        return (
        <div>
            <h1>{visibilityFilter}</h1>
            <ul>
                {this.renderIdeas(filteredIdeas)}
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
        dateCreated: PropTypes.string
    }).isRequired).isRequired,
    deleteIdea: PropTypes.func.isRequired,
    visibilityFilter: PropTypes.string.isRequired
}

export default connect(mapStateToProps, {deleteIdea})(IdeasList);
