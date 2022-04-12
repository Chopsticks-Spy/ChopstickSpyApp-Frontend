const axios = require('axios')
const IP = "http://localhost:8000/scoreboard"

async function getScore(){
    const response = await axios.get(IP)
    return response.data
}

async function postScore(n,larr,h,t){
    const result = await axios.post(IP,{
        name: n,
        laser: larr,
        hp: h,
        time: t
    })
    return result
}

// getScore().then((data)=>{
//     console.log(data.data)
// })

module.exports = {
    getScore,
    postScore
}