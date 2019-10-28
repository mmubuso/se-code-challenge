import React, { Component } from 'react'
import Axios from 'axios'

export default class Home extends Component {
    state = {
        comic: {
        }
    }

   
    componentDidMount() {
        this.getLatestComic()
    }

    // Load state with latest comic
    getLatestComic = () => {
        Axios.get('https://xkcd.now.sh/?comic=latest')
        .then((res) => {
            this.setState({ comic: res.data })
        })
        .catch((err) => console.log(err))
    }

    render() {
        // Destructure comic object for use in JSX
        const { alt, day, img, link, month, news, num, safe_title, title, transcript, year } = this.state.comic
        return (
            <div>
                <h1>The Latest Issue #{num} - {month}/{day}/{year}</h1>
                <img className="img-thumbnail img-fluid latestImage" alt={title} title={alt} src={img} />
                <h2>Transcript</h2>
                <p>{transcript || null}</p>
            </div>
        )
    }
}
