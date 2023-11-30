import React, { Component } from 'react'; 
import List from './List'; 
import {DropdownButton, Dropdown} from 'react-bootstrap' ;


class FilteredList extends Component { 
constructor(props) { 
super(props); 
// The state is just a list of key/value pair (like a hashmap)
this.state = { 
search: "",
dropkey:""
}; 
} 
// Sets the state whenever the user types on the search bar
 onSearch = (event) => { 
this.setState({search: event.target.value.toLowerCase()}); 
} 
filterItem = (item) => { 
// Checks if the current search term is contained in this item
//return item.name.toLowerCase().search(this.state.search) !== -1; 
   if(this.state.dropkey !="all"){
	  return item.type.toLowerCase().search(this.state.dropkey) !==-1; 
   }
   else{
	   
   return item.type.toLowerCase().search(this.state.dropkey);
   }
  
} 

onSelect =(eventKey)=>{
	this.setState({dropkey : eventKey.toLowerCase()});
}



render() { 
return ( 
<div className="filter-list">
   <h1>Produce Search</h1>
   <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.onSelect} >
	<Dropdown.Item eventKey="all">All</Dropdown.Item>
	<Dropdown.Item eventKey="Fruit">Fruits</Dropdown.Item>
	<Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
   </DropdownButton>
   <input type="text" placeholder="Search" onChange={this.onSearch} />
   <List items={this.props.items.filter(this.filterItem)} />
</div>
); 
} 
} 
export default FilteredList;