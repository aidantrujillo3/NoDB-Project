import React, {Component} from 'react'
import GuitarStore from './GuitarStore'
import axios from 'axios'

class GuitarFinder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unownedGuitars: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    
    }

    componentDidMount() {
        axios.get('/api/unowned-guitars').then(res => {
            console.log(res.data)
            this.setState({
                unownedGuitars: res.data
            })
        }).catch(error => {console.log(error)})
    }

    render() {
        console.log(this.state)
        const guitarList = this.state.unownedGuitars.map(element => {
            return (
                <GuitarStore
                    key={element.id}
                    buyGuitar={this.props.buyGuitar}
                    guitars={element}
                    refreshFn={this.componentDidMount}
                    />
            )
        })
        return (
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                {guitarList}
            </div>
        )
    }
}

export default GuitarFinder