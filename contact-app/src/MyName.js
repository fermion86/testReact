import React, { Component } from 'react';

class MyName extends Component {
  render() {
   let style ={
       fontSize:'2em',
       color: 'midnightblue',
       backgroundColor:'aqua'

   }
    return (
          <div style={style}>
                
                <h1>Hello {this.props.name} </h1>
                <h2>{this.props.number} </h2>
                <div>{this.props.children} </div>

          </div>
    );
  }
}

// 유지보수를 위해서 설정해주는 값
// MyName.propTypes={
//     name:React.PropTypes.string,
//     number:React.PropTypes.number.isRequired,
// }

MyName.defaultProps={
    name: 'Unknown'
}

export default MyName;