import React from 'react';
import List1 from '../list1.jpg'
import {pic} from '../random.js'
const APIkey = "AIzaSyAHhcDr9miOtzxIWHbT3eCUyJtDpb0g51k"

class VisionApi extends React.Component {

  constructor(){
    super()
  }

  //for the jsonbody method I can probably modify it to accept local images instead of having to use
  // base64 coded stuff

jsonBody(arg){
  let body = JSON.stringify({
    requests: [
      {
        features: [
          {type: "TEXT_DETECTION"}
        ],
        image: {
          content: arg
          }
        }
    ]
  })

  fetch(
    "https://vision.googleapis.com/v1/images:annotate?key=" +
      APIkey,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: body
    }
  ).then(res => res.json())
    .then(data => {
      console.log(data.responses)
    })
  }

  render(){
  return (
    <div className="App">
      {this.jsonBody(pic)}
    </div>
  );
}
}

export default VisionApi;
