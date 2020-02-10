import React, {Component} from 'react'

class GuitarStore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storeVisited: false
        }
        this.checkStore = this.checkStore.bind(this)
    }

    checkStore() {
        if(this.state.storeVisited) {
            this.props.buyGuitar({
                brand: this.props.guitars.brand,
                image: this.props.guitars.image
            })
            this.props.refreshFn()
            this.setState({
                storeVisited: false,
            })
        } else {
            this.setState({
                storeVisited: true,
            })
        }
    }

    render() {
        return (
            <img
            style={{ width: "150px", height: "150px"}}
            src={
                this.state.storeVisited
                ? this.props.guitars.image
                : GuitarStore
            }
            alt={this.props.guitars.brand}
            onClick={this.checkStore}
            ></img>
        )
    }
    

    
}

export default GuitarStore