import React from 'react';
import List1 from '../list1.jpg'
import {pic} from '../random.js'
const APIkey = "AIzaSyAHhcDr9miOtzxIWHbT3eCUyJtDpb0g51k"

class VisionApi extends React.Component {

  constructor(){
    super()
    this.state = {
      text: ""
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
    console.log(this.state.text)
  }

  // componentDidMount(){
  //   const arr = []
  //   for(let i = 0; i < 100; i++){
  //     let num = i.toString().split('')
  //     if(3-num.length === 2){
  //       num.unshift("0","0")
  //     } else if(3-num.length===1){
  //       num.unshift("0")
  //     }
  //     let newNum = num[0] + num[1] + num[2]
  //     arr.push(newNum)
  //     }
  //     this.random(arr)
  //   }

    random = () => {
      const arr = []
      for(let i = 0; i < 100; i++){
        let num = i.toString().split('')
        if(3-num.length === 2){
          num.unshift("0","0")
        } else if(3-num.length===1){
          num.unshift("0")
        }
        let newNum = num[0] + num[1] + num[2]
        arr.push(newNum)
        }
        let cool = this.state.text.indexOf(arr[0])
        let cool1 = this.state.text.indexOf(arr[1])
       console.log(this.state.text.slice(cool, cool1))
      }
    //I need to learn async, promise, await etc for situations like this

  render(){
  return (
    <div className="App">
      <button onClick={()=> this.jsonBody(pic)}>json</button>
      <button onClick={this.random}>click</button>
    </div>
  );
}
}

export default VisionApi;
