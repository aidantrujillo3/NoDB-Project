import React, {Component} from 'react'

class guitars extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false,
            userInput: ''
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.isEditing ? (
                    <div>
                        <input onChange={this.handleChange} />
                        <button
                            onClick={() => {
                                this.props.saveBrand(this.props.guitars.id, this.state.userInput)
                                this.toggleEdit()
                            }}
                            >Save
                            </button>
                    </div>
                ) : (
                    <p onDoubleClick={this.toggleEdit}>{this.props.guitars.name}</p>
                )}
                <img alt={this.props.guitars.name} src={this.props.guitars.image} />
                <button
                    onClick={() => this.props.sellGuitar(this.props.guitars.id)}
                    >Sell
                    </button>
            </div>
        )
    }
}

export default guitars