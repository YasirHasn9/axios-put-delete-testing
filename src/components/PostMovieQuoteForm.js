import React from "react";

class PostMovieQuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieQuote: {
        quote: "",
        movie: "",
        character: ""
      }
    };
  }
  handleChange = e => {
    this.setState({
      movieQuote: { ...this.state.movieQuote, [e.target.name]: e.target.value }
    });
  };
  submitPostMessage = e => {
    e.preventDefault();
    this.props.postMessage(this.state.movieQuote);
  };
  render() {
    return (
      <div className="quotes-form">
        <h2>Post (add) a new quote</h2>
        <form onSubmit={this.submitPostMessage}>
          <input
            type="text"
            name="quote"
            onChange={this.handleChange}
            value={this.state.movieQuote.quote}
            placeholder="quote"
          />
          <input
            type="text"
            name="character"
            onChange={this.handleChange}
            value={this.state.movieQuote.character}
            placeholder="Character"
          />
          <input
            type="text"
            name="movie"
            onChange={this.handleChange}
            value={this.state.movieQuote.movie}
            placeholder="movie"
          />
          <button className="quotes-btn" type="submit">
            Post Quote
          </button>
        </form>
      </div>
    );
  }
}

export default PostMovieQuoteForm;
