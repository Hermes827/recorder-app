import React from 'react';
import List1 from '../list1.jpg'
import {pic} from '../random.js'
const APIkey = "AIzaSyAHhcDr9miOtzxIWHbT3eCUyJtDpb0g51k"
const newArr = []

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
      // const newArr = []
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

        for(let i = 0; i < 100; i++){
        let cool = this.state.text.indexOf(arr[i])
        let cool1 = this.state.text.indexOf(arr[i+1])
        // console.log(cool)
       //  let cool1 = this.state.text.indexOf(arr[1])
       let item = this.state.text.slice(cool, cool1)
       newArr.push(item)
        }
      }
    //I need to learn async, promise, await etc for situations like this

  render(){
  return (
    <div className="App">
      <button onClick={()=> this.jsonBody(pic)}>json</button>
      <button onClick={this.random}>click</button>
      <h1>{newArr[Math.floor(Math.random()*100)]}</h1>
    </div>
  );
}
}

export default VisionApi;
