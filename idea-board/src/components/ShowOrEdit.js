import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'actions'


class ShowOrEdit extends Component {

    state = {
        value: this.props.label || '',
        editing: false
    }


    handleEditing = () => this.setState({ 
        editing: true, 
        value: this.state.value 
    });


    handleEditingChange = (event) => this.setState({ 
        value: event.target.value 
    });
    
    handleEditingDone = () => {
        this.setState({ 
            editing: false 
        })
        this.props.sendValueUp(this.state.value, this.props.name)
        
    }

    /*  140 chars sample
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text every.
    */ 

    render(){
        return (
            <div>
                {this.state.editing ? 
                    <textarea type='text'
                        rows={4}
                        cols={20}
                        maxLength={140}
                        value={this.state.value}
                        onBlur={this.handleEditingDone}
                        onChange={this.handleEditingChange}
                        autoFocus="true"
                    />
                    :
                    <div onDoubleClick={this.handleEditing}>
                        <label>
                            {this.state.value}
                        </label>
                    </div>            
                }
            </div>
        )
    }
}

ShowOrEdit.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    sendValueUp: PropTypes.func
}

export default connect(null, actions)(ShowOrEdit);
