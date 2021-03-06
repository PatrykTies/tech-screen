import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'


class FilterButton extends Component{

    constructor(props){
        super(props)
        this.filter = props.filter
        this.active = props.active
    }

    setFilter = () => {
        this.props.setVisibilityFilter(this.filter)
    }

    render(){
        return (
            <button
                className='fab-icon-holder'
                onClick={() => this.setFilter()}
            >
                {this.props.children}
            </button>
        )
    } 
}

FilterButton.propTypes = {
    children: PropTypes.node.isRequired,
    filter: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    setVisibilityFilter: PropTypes.func.isRequired,
}


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

export default connect(mapStateToProps, {setVisibilityFilter})(FilterButton)