import React from "react";
import PostMovieQuoteForm from "./components/PostMovieQuoteForm";
import "./styles.css";
import axios from "axios";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postSuccessMessage: "",
      postError: "",
      putSuccessMessage: "",
      putError: "",
      deleteSuccessMessage: "",
      deleteError: "",
      showForm: ""
    };
  }

  postMessage = quote => {
    axios
      .get(`https://lambda-school-test-apis.herokuapp.com/quote`, quote)
      .then(res => {
        this.setState({
          putSuccessMessage: res.data.successMessage,
          postError: ""
        });
      })
      .catch(err => console.log(err));
  };

  changeTab = tab => {
    this.setState({
      postSuccessMessage: "",
      postError: "",
      putSuccessMessage: "",
      putError: "",
      deleteSuccessMessage: "",
      deleteError: "",
      showForm: tab
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="app-header">Movie Quote</h1>
        <nav>
          <ul>
            <li
              className={this.state.showForm === "post" ? "active" : null}
              onClick={() => this.changeTab("post")}
            >
              Post
            </li>
            <li
              className={this.state.showForm === "put" ? "active" : null}
              onClick={() => this.changeTab("put")}
            >
              Put
            </li>
            <li
              className={this.state.showForm === "delete" ? "active" : null}
              onClick={() => this.changeTab("delete")}
            >
              Delete
            </li>
          </ul>
        </nav>
        {
          (this.state.showForm = "post" && (
            <PostMovieQuoteForm
            postMessage={this.postMessage}
              postSuccessMessage={this.state.postSuccessMessage}
              postError={this.state.postError}
            />
          ))
        }
      </div>
    );
  }
}
export default App;
