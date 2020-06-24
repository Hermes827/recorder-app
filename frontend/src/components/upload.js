import React from 'react';

class Upload extends React.Component {

  constructor(){
    super()

  }

  handleImageUpload = (event) => {
    console.log(event.target.files)
  // const files = event.target.files
  // const formData = new FormData()
  // formData.append('myFile', files[0])
  //
  // fetch('/saveImage', {
  //   method: 'POST',
  //   body: formData
  // })
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data)
  // })
  // .catch(error => {
  //   console.error(error)
  // })
}



  render(){
  return (
    <div className="App">
    <h1>Upload file here</h1>

    <input type="file" id="fileUpload" onChange={(event)=> this.handleImageUpload(event)}/>

    </div>
  );
}
}

export default Upload;
