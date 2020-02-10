
const guitarArray = require("./GuitarStuff")

module.exports = {
    getUnownedGuitars: (req, res) => {
        console.log(guitarArray.guitarArray)
        res.status(200).send(guitarArray.guitarArray)
    }
}