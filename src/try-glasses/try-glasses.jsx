import React, { Component } from 'react';
import "./try-glasses.css"
import Menu from './menu';
import dataGlasses from '../../public/dataGlasses.json'
const data = dataGlasses
export default class TryGlasses extends Component {
  constructor() {
    super()
    this.state = {
      model: data[0],
      display: 'none'
    }
  }

  renderChangeCard = () => {
    const { model, display } = this.state
    return (
      <div className="card_model">
        <img src={model.url} alt="" style={{ display: display }} />
        <div className="card_title" style={{ display: display }}>
          <h4>{model.name}</h4>
          <p>{model.desc}<i style={{ color: 'green' }}>Price: {`${model.price}$`}</i></p>
        </div>
      </div>
    )
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="overlay">
            <div className="title">
              <h2>TRY GLASSES APP ONLINE</h2>
            </div>
            <div className="product">
              <div className="card_model">
                <img src="../../public/img/v7.png" alt="" />
                <div className="card_title">
                  <h4>FENDI F8750</h4>
                  <p>Light pink square lenses define these sunglasses,ending with amother of pearl effect tip.</p>
                </div>
              </div>
              {this.renderChangeCard()}
            </div>
            <Menu products={data} handleState={(product) => {
              this.setState({
                model: product,
                display: 'block'
              })
            }} />
          </div>
        </div>
      </>
    );
  }
}


