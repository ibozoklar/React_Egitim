import React from 'react'

function JsxSample() {
    let name ="Çağatay"
    let age=18
    let onlinestatus=true
let cities =["İstanbul", "İzmir","Niğde","Kayseri"]
    //types ->string, numeric, boolean, undefined, null
    return <>
    <h1>Name: {name}</h1>
    <h1>Age: {age}</h1>
    { //java script ckodu yaziyosun demek
        onlinestatus == true ? <h1>User Online!</h1> : <h1>User Offline!</h1>
    }

    <ul>
    {
        cities.map(item=> <li>{item}</li>)
    }

    </ul>
     </>
}

export default JsxSample