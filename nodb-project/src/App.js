import React, {Component} from 'react'
import GuitarFinder from './components/GuitarFinder'
import Header from './components/Header'
import GuitarCollection from './components/GuitarCollection'
import axios from 'axios'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            boughtGuitars: []
        }

        this.buyGuitar = this.buyGuitar.bind(this)
        this.sellGuitar = this.sellGuitar.bind(this)
        this.saveBrand = this.saveBrand.bind(this)
      }

    componentDidMount() {
      // console.log("hit")
        axios.get('/api/guitars').then(res => {
          // console.log("hit", res.data)
            this.setState({
                boughtGuitars: res.data
            })
        })
    }

    buyGuitar(guitars) {
        axios.post('/api/guitars', {guitars}).then(res => {
            this.setState({
                boughtGuitars: res.data
            })
        })
    }

    saveBrand(id, newBrand) {
        axios.put(`api/guitars/${id}`).then(res => {
            this.setState({
                boughtGuitars: res.data
            })
        })
    }

    sellGuitar(id) {
        axios.delete(`/api/guitars/${id}`).then(res => {
            this.setState({
                boughtGuitars: res.data
            })
        })
    }

    render() {
      console.log(this.state)
        return (
            <div className="App">
                <Header />
                <GuitarFinder buyGuitar={this.buyGuitar} />
                <GuitarCollection
                    saveBrand={this.saveBrand}
                    sellGuitar={this.sellGuitar}
                    boughtGuitars={this.state.boughtGuitars}
                    />
                    
            </div>
        )
    }
}

export default App
