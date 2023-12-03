import React, { Component } from 'react'; 
import List from './List'; 
import {DropdownButton, Dropdown} from 'react-bootstrap' ;


class FilteredList extends Component { 
constructor(props) { 
super(props); 
this.state = { 
search: "",
}; 
} 
 onSearch = (event) => { 
this.setState({search: event.target.value.toLowerCase()}); 
} 
filterItem = (item) => { 
   if(this.state.search !=="all"){
	  return item.type.toLowerCase().search(this.state.search) !==-1; 
   }
   else{
	   
   return item.type.toLowerCase().search(this.state.search);
   }
  
} 

onSelect =(eventKey)=>{
	this.setState({search : eventKey.toLowerCase()});
}

render() { 
return ( 
<div className="filter-list">
   <h1>Produce Search</h1>
   <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.onSelect} >
	<Dropdown.Item eventKey="all">All </Dropdown.Item><br/>
	<Dropdown.Item eventKey="Fruit">Fruits </Dropdown.Item><br/>
	<Dropdown.Item eventKey="Vegetable">Vegetables </Dropdown.Item><br/>
   </DropdownButton><br/><br/>
   <input type="text" placeholder="Search" onChange={this.onSearch} />
   <List items={this.props.items.filter(this.filterItem)} />
</div>
); 
} 
} 
export default FilteredList;