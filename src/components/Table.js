import React from 'react';



class Table extends React.Component {
    
    render() {
        var {name}=this.props
        return (
            <h1>{name}</h1>
        );
      }
  }




// function Table(props) {
//   return (
//     < >

//         <h1>{props.name}</h1>


//     </>
//   );
// }

export default Table;
