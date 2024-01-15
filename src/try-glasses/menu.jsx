import React, { Component } from 'react'

export default class Menu extends Component {

  renderMenu = () => {
    const { products } = this.props
    return products.map((product, i) => {
      return (
        <img src={`../../public/img/g${+i + 1}.jpg`} alt="" key={i} onClick={() => {
          this.props.handleState(product)
        }} />
      )
    })

  }
  render() {
    return (
      <div className='list-menu'>
        {this.renderMenu()}
      </div>
    )
  }
}
