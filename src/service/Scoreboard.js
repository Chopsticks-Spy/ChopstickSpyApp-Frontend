const axios = require('axios')
const IP = "http://192.168.43.210:8000/scoreboard"

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

(async()=>{
    const x = await postScore('KKK',[1,1,1,0,0,0],5,11.11)
    console.log(x)
})()