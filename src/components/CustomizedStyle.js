import React, { Component } from "react";
import axios from "axios";
import content from "../database/inputs/content.png";
import style from "../database/inputs/style.png";
import result from "../database/outputs/result.png";

class CustomizedStyle extends Component{
  constructor(props) {
    super(props);
    this.onContentChange = this.onContentChange.bind(this);
    this.onStyleChange = this.onStyleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      alpha: 1,
      content: null,
      style: null,
    };
  };

  onContentChange(e) {
    this.setState({
      alpha: this.state.alpha,
      content: e.target.files[0],
      style: this.state.style,
    });
  };

  onStyleChange(e) {
    this.setState({
      alpha: this.state.alpha,
      content: this.state.content,
      style: e.target.files[0],
    });
  };

  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', this.state.content);
    formData.append('style', this.state.style);
    formData.append('alpha', this.state.alpha);
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    const url = "http://localhost:5000/querycustomizedstyle";
    axios.post(url, formData, config)
      .then((res) => {
        console.log('res', res);
      });
  };

  onAlphaChange = ()=>{
    this.setState({
      alpha: document.getElementById('alpha').value,
      content: this.state.content,
      style: this.state.style,
    })
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <form onSubmit={this.onFormSubmit}>
            <div className="mb-3">
              <h1>Upload Images Here</h1>
            </div>
            <div className="mb-3 col-sm-6">
                <label htmlFor="content" className="form-label">Content Image</label>
                <input type="file" className="form-control" id="content" onChange={this.onContentChange} />
            </div>
            <div className="mb-3 col-sm-6">
                <label htmlFor="style" className="form-label">Style Image</label>
                <input type="file" className="form-control" id="style" onChange={this.onStyleChange} />
            </div>
            <div className="mb-3 col-sm-6">
              <label className="form-check-label" htmlFor="alpha">Alpha = {this.state.alpha}</label>
              <input type="range" className="form-range" min="0" max="1" step="0.05" id="alpha" onChange={this.onAlphaChange} />
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
          </form>
        </div>
        <div className="container my-3">
            <h1>See Results Here</h1>
            <div className="row">
                <div className="col-sm-2">
                    <div className="card h-100">
                        <img src={content} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Content Image</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card h-100">
                        <img src={style} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Style Image</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card h-100">
                        <img src={result} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Result Image</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  };
};

export default CustomizedStyle;
