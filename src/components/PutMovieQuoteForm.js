import React from "react";

class PutMovieQuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieQuote: {
        quote: "But why is all the rum gone?",
        movie: "Pirates of the Carribean",
        character: "Jack Sparrow"
      }
    };
  }
  handleChange = e => {
    this.setState({
      movieQuote: {
        ...this.state.movieQuote,
        [e.target.name]: e.target.value
      }
    });
  };
  submitPutMessage = e => {
    e.preventDefault();
    this.props.putMessage(this.state.movieQuote);
    this.setState({ movieQuote: { quote: "", movie: "", character: "" } });
  };
  render() {
    return (
      <div className="quotes-form">
        <form onSubmit={this.submitPutMessage}>
          <h2>Put (update) a quote </h2>
          <input
            type="text"
            name="quote"
            onChange={this.handleChange}
            placeholder="Quote"
            value={this.state.movieQuote.quote}
          />
          <input
            type="text"
            name="character"
            onChange={this.handleChange}
            placeholder="Quote"
            value={this.state.movieQuote.character}
          />
          <input
            type="text"
            name="movie"
            onChange={this.handleChange}
            placeholder="Quote"
            value={this.state.movieQuote.movie}
          />
          <button className="quotes-btn" type="submit">
            Put Quote
          </button>
        </form>
      </div>
    );
  }
}
export default PutMovieQuoteForm;
