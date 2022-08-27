import React, { Component } from 'react'
import data from './dataGlasses.json'
import './style.css'

export default class Glasses extends Component {
    state = {
        glass: {
                "id": 1,
                "price": 30,
                "name": "GUCCI G8850U",
                "url": "./glassesImage/v1.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
    }
    // onChange= () => {
    //     this.setState({ 
    //         "id": this.state.glass.id,
    //         "price": this.state.glass.price,
    //         "name": this.state.glass.name,
    //         "url": this.state.glass.url,
    //         "desc": this.state.glass.desc,
    //     })
    // }
  render() {
    return (
        <div>
            <h2 className="title text-center">Try Glasses App Online</h2>
                <div className="container">
                <div className="row">
                    <div className="col-6">
                        
                        <div className="vglasses__card">
                        <img src="./glassesImage/model.jpg" alt="model" />
                            <div className="vglasses__model">
                                <img src={this.state.glass.url} alt="v1" />
                            </div>
                            <div className="vglasses__info">
                                <h4>{this.state.glass.name}</h4>
                                <button className="btn btn-danger" > {this.state.glass.price} $ </button>
                                <p>{this.state.glass.desc}</p>
                            </div>
                        </div>
                    </div>
                <div className="col-6">
                <div className="vglasses__card">
                        <img src="./glassesImage/model.jpg" alt="model" />
                            {/* <div className="vglasses__model">
                                <img src={this.state.glass.url} alt="v1" />
                            </div>
                            <div className="vglasses__info">
                                <h4>{this.state.glass.name}</h4>
                                <button className="btn btn-danger" > {this.state.glass.price} $ </button>
                                <p>{this.state.glass.desc}</p>
                            </div> */}
                        </div>

                </div>
            </div>
                </div>
           <div>
                <div className="row py-5">
                    <img className="col-2" src="./glassesImage/v1.png" alt="v1" />
                    <img className="col-2" src="./glassesImage/v2.png" alt="v1" />
                    <img className="col-2" src="./glassesImage/v3.png" alt="v1" />
                    <img className="col-2" src="./glassesImage/v4.png" alt="v1" />
                    <img className="col-2" src="./glassesImage/v5.png" alt="v1" />
                    <img className="col-2" src="./glassesImage/v6.png" alt="v1" />
                    <img className="col-2" src="./glassesImage/v7.png" alt="v1" />
                    <img className="col-2" src="./glassesImage/v8.png" alt="v1" />
                    <img className="col-2" src="./glassesImage/v9.png" alt="v1" />
                </div>
           </div>
        </div>
    )
  }
}
