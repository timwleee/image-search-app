import React, { Component } from 'react'
import Result from '../results/Result';
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
  const val = e.target.value;
  this.setState({ [e.target.name]: val }, () => {
    if (val === '') {
      this.setState({ images: [] });
    } else {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
            this.state.searchText
          }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
        )
        .then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
    }
  });
};

onAmountChange = (e, index, value) => this.setState({ amount: value });

render() {
  console.log(this.state.images);
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
        placeholder="Amount"
        value={this.state.amount}
        onChange={this.onAmountChange}
      >
        <MenuItem value={5} primaryText="5" />
        <MenuItem value={10} primaryText="10" />
        <MenuItem value={15} primaryText="15" />
        <MenuItem value={30} primaryText="30" />
        <MenuItem value={50} primaryText="50" />
      </Select>
      <br />
      {this.state.images.length > 0 ? (
        <Result images={this.state.images} />
      ) : null}
    </div>
  );
}
}

export default Search;