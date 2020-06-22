import React from 'react';
import List1 from '../list1.jpg'
import {pic} from '../random.js'
const APIkey = "AIzaSyAHhcDr9miOtzxIWHbT3eCUyJtDpb0g51k"

class VisionApi extends React.Component {

  constructor(){
    super()
    this.state = {
      text: "",
      arr: []
    }
  }

jsonBody(arg){
  let body = JSON.stringify({
    requests: [
      {
        features: [
          {type: "DOCUMENT_TEXT_DETECTION"}
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
      this.setState({
        text: data.responses[0].fullTextAnnotation.text
      })
    })
  }

  componentDidMount(){
    for(let i = 0; i < 100; i++){
      let num = i.toString().split('')
      if(3-num.length === 2){
        num.unshift("0","0")
      } else if(3-num.length===1){
        num.unshift("0")
      }
      let newNum = num[0] + num[1] + num[2]
      this.state.arr.push(newNum)
      }
    }

  render(){
  return (
    <div className="App">
      <button onClick={()=> this.jsonBody(pic)}>json</button>
    </div>
  );
}
}

export default VisionApi;

//when I console.log this.state.arr.length it says that the arr is zero, there is probably
//some async problems going on

  // {console.log(this.state.text.slice(this.state.arr[0],this.state.arr[1]))}
