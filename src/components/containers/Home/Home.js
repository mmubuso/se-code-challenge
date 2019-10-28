import React, { Component } from 'react'
import Axios from 'axios'

export default class Home extends Component {
    state = {
        comic: {
        }
    }

    // Load state with latest comic
    componentDidMount() {
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
                <h1>The Latest Issue {num}</h1>
                <img alt={title} title={alt} src={img} />
            </div>
        )
    }
}
