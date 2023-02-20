const bg_btn = [
    "#ff00a1",
    "#041cf6",
    "#774084",
    "#452e52",
    "#09cf6a",
    "#a02323"
]
let colorIndex_current = 0
addEventListener("message",(event) => {
    const color_index = event.data
    const backgroundColor = bg_btn[colorIndex_current]
    colorIndex_current +=1
    colorIndex_current %= bg_btn.length
    const color = {"backgroundColor" : backgroundColor}
    postMessage(color) // used to post on HTML 

})