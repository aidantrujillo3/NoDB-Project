const boughtGuitars = []

let id = 0

module.exports = {
    getBoughtGuitars : (req, res) => {
        res.status(200).send(boughtGuitars)

    },
    buyGuitar: (req, res) => {
        const {guitars} = req.body
        guitars.id = id
        id++

        boughtGuitars.push(guitars)

        res.status(200).send(boughtGuitars)
    },

    editGuitarBrand: (req, res) => {
        const{id} = req.params
        const{brand}= req.body

        const index = boughtGuitars.findIndex(element => {
            return element.id === +id
        })

        boughtGuitars[index].brand = brand

        res.status(200).send(BoughtGuitars)

    },

    sellGuitar: (req, res) => {
        const {id} = req.params
        const index = boughtGuitars.findIndex(element => {
            return element.id === +id
        })

        boughtGuitars.splice(index, 1)

        res.status(200).send(boughtGuitars)
    }
}