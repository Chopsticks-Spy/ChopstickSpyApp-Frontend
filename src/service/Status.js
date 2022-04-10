const axios = require('axios')
const IP = "http://192.168.43.210:8000/status"

async function getStatus(){
    const resp = await axios.get(IP)
    return resp.data
}

async function patchStatus(active,win,laser,h,tm){
    const resp = await axios.patch(IP,{
        isActive: active,
        isWin: win,
        activeLaser: laser,
        hp: h,
        time: tm
    })
    return resp
}

async function patchStatusAttr(attribute,value){
    const data = getStatus()
    data[attribute] = value
    const resp = await axios.patch(IP,data)
    return resp
}

module.exports = {
    getStatus,
    patchStatus,
    patchStatusAttr
}