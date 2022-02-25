import React from "react";
import { Col } from "reactstrap";
import search from './search.svg'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTopic: "" };
  }

  handleChange = async e => {
    this.props.search(e.target.value);
    this.setState({ searchTopic: e.target.value });
  };

  render() {
    return (
        <Col className="searchWrapper">
            <img src={search} ></img>
            <input 
             className="seearchinput"
              placeholder="Search for keywords, author"
              name="topic"
              value={this.state.searchTopic}
              onChange={this.handleChange}
            />
        </Col>
           
    );
  }
}

export default SearchBar;
