import React, { Component } from 'react'
import Axios from 'axios'


export default class Search extends Component {
    state = {
        searchInput: "",
        comic: {

        }
    }

    // Allow only number to be inserted
    handleChange = (evt) => {
        let value = evt.target.value
        value = value.split('').filter((char) => /^[0-9]/.test(char))
        value = value.join('');
        this.setState({ [evt.target.name]: value })
    }

    // Get the comic user requested 
    handleSearch = () => {
        let query = this.state.searchInput
        if (query !== "") {
            Axios.get(`https://xkcd.now.sh/?comic=${query}`)
                .then((res) => {
                    this.setState({ comic: res.data })
                })
                .catch(err => console.log(err))
        } else {
            alert("Please Enter a valid search")
        }
    }

    render() {

        // Destructure comic object for use in JSX
        const { alt, day, img, link, month, news, num, safe_title, title, transcript, year } = this.state.comic

        return (
            <div>
                <input
                    className="searchInput"
                    name="searchInput"
                    value={this.state.searchInput}
                    type="text"
                    onChange={this.handleChange} />
                <button onClick={this.handleSearch}>Search</button>
                
                <div>
                    <img alt={title} title={alt} src={img} />
                </div>
            </div>
        )
    }
}
