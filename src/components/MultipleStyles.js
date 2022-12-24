import React, { Component } from "react";
import axios from "axios";
import content from "../database/inputs/content.png";
import style1 from "../database/inputs/style1.png";
import style2 from "../database/inputs/style2.png";
import result from "../database/outputs/result.png";

class MultipleStyles extends Component{
  constructor(props) {
    super(props);
    this.onContentChange = this.onContentChange.bind(this);
    this.onStyle1Change = this.onStyle1Change.bind(this);
    this.onStyle2Change = this.onStyle2Change.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      alpha: 1,
      beta: 1,
      content: null,
      style1: null,
      style2: null,
    };
  };

  onContentChange(e) {
    this.setState({
      content: e.target.files[0],
      style1: this.state.style1,
      style2: this.state.style2,
      alpha: this.state.alpha,
      beta: this.state.beta,
    });
  };

  onStyle1Change(e) {
    this.setState({
      content: this.state.content,
      style1: e.target.files[0],
      style2: this.state.style2,
      alpha: this.state.alpha,
      beta: this.state.beta,
    });
  };

  onStyle2Change(e) {
    this.setState({
      content: this.state.content,
      style1: this.state.style1,
      style2: e.target.files[0],
      alpha: this.state.alpha,
      beta: this.state.beta,
    });
  };

  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', this.state.content);
    formData.append('style1', this.state.style1);
    formData.append('style2', this.state.style2);
    formData.append('alpha', this.state.alpha);
    formData.append('beta', this.state.beta);
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    const url = "http://localhost:5000/querymultiplestyles";
    axios.post(url, formData, config)
      .then((res) => {
        console.log('res', res);
      });
  };

  onAlphaChange = ()=>{
    this.setState({
      content: this.state.content,
      style1: this.state.style1,
      style2: this.state.style2,
      alpha: document.getElementById('alpha').value,
      beta: this.state.beta,
    })
  };

  onBetaChange = ()=>{
    this.setState({
      content: this.state.content,
      style1: this.state.style1,
      style2: this.state.style2,
      alpha: this.state.alpha,
      beta: document.getElementById('beta').value,
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
            <div className="row">
              <div className="mb-3 col-sm-6">
                  <label htmlFor="style" className="form-label">Style Image 1</label>
                  <input type="file" className="form-control" id="style" onChange={this.onStyle1Change} />
              </div>
              <div className="mb-3 col-sm-6">
                  <label htmlFor="style" className="form-label">Style Image 2</label>
                  <input type="file" className="form-control" id="style" onChange={this.onStyle2Change} />
              </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                  <label className="form-check-label" htmlFor="alpha">Alpha = {this.state.alpha}</label>
                  <input type="range" className="form-range" min="0" max="1" step="0.05" id="alpha" onChange={this.onAlphaChange} />
                </div>
                <div className="col-sm-6">
                  <label className="form-check-label" htmlFor="beta">Beta = {this.state.beta}</label>
                  <input type="range" className="form-range" min="0" max="1" step="0.05" id="beta" onChange={this.onBetaChange} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
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
                        <img src={style1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Style Image 1</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card h-100">
                        <img src={style2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Style Image 2</h5>
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

export default MultipleStyles;