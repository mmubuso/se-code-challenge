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
    handleSearch = (evt) => {
        evt.preventDefault()
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
        this.setState({ searchInput: "" })
    }

    render() {

        // Destructure comic object for use in JSX
        const { alt, day, img, link, month, news, num, safe_title, title, transcript, year } = this.state.comic

        return (
            <div>

                <form onSubmit={this.handleSearch}>
                    <input
                        placeholder="Enter comic valid comic book number and hit send"
                        className="form-control searchInput"
                        name="searchInput"
                        value={this.state.searchInput}
                        type="text"
                        onChange={this.handleChange} />
                </form>

                <button
                    className="btn btn-outline-secondary searchSubmit"
                    onClick={this.handleSearch}>Search</button>

                <div className="container">
                    { year ?  <h1>Issue #{num} - {month}/{day}/{year}</h1> : null }
                    <img
                        className="img-thumbnail img-fluid searchImage"
                        alt={title} title={alt} src={img} />
                    <p>{transcript || null}</p>
                </div>
            </div>
        )
    }
}
