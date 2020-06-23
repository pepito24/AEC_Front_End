import React from 'react'; 

 
 

export class Child extends React.Component { 
  constructor(props) {     
    super(props); 
    this.handleChange = this.handleChange.bind(this); 
} 

 
  handleChange(e) { 
    const name = e.target.value; 
    this.props.OnChange(name); 
  } 

 
  render() { 
    return ( 
      <> 
        <select id="great-names" onChange={this.handleChange}> 
          <option value="people">people</option> 
          <option value="Jonathan">planets</option>  
        </select> 
     </> 
    ); 
  } 
} 