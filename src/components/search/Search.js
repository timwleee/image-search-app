import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

export class Search extends Component {

state = {
    searchText: "",
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '10043810-8e5265dc25ebf1b68ab1a4a84',
    images: []
}

onTextChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  }, () => {
    axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}`)
      .then(res => this.setState({
        images:res.data.hits
      }))
      .catch(err => console.log(err));
  });
};

render() {
  console.log(this.state);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          placeholder="Search For Images"
          fullWidth={true}
        />
        <br />
        <Select
          name="amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          placeholder="Amount"
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
        <br />
      </div>
    )
  }
}

export default Search;