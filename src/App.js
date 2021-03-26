// import React from 'react';
// //const connection = require('./routes');
//
// class App extends React.Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             value: '',
//             food: [],
//         };
//
//         fetch('http://localhost:3000/posts')
//             .then(response => response.json()).
//         then(food => (this.setState({food})));
//     }
//
//     handleNameOnChange(e) {
//         this.setState({
//             name: e.target.value,
//         });
//     }
//
//     handleCuisineOnChange(e) {
//         this.setState({
//             cuisine: e.target.value,
//         })
//     }
//
//     handlePhoneOnChange(e) {
//         this.setState({
//             phone: e.target.value,
//         })
//     }
//
//     handlePriceOnChange(e) {
//         this.setState({
//             price: e.target.value,
//         })
//     }
//
//     addToDatabase() {
//         // let sql = "INSERT INTO FOOD VALUES (" + this.state.name + "," + this.state.cuisine + "," + this.state.phone + "," + this.state.price +");";
//         // connection.runSQL(sql);
//     }
//
//     render() {
//         return (
//             <div className="wrap">
//             {/*//     <h1 className="string"> Name </h1>*/}
//             {/*//     <input type="text" id="name" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } />*/}
//             {/*    <h1 className="string">Cuisine</h1>*/}
//             {/*//     <input type="text" id="cuisine" value={this.state.cuisine} onChange={ (e) => this.handleCuisineOnChange(e) }/>*/}
//             {/*//     <h1 className="string">Phone Number</h1>*/}
//             {/*//     <input type="number" id="phone" value={this.state.phone} onChange={ (e) => this.handlePhoneOnChange(e) }/>*/}
//             {/*//     <h1 className="string">Price Per Guest</h1>*/}
//             {/*//     <input type="number" id="price" value={this.state.price} onChange={ (e) => this.handlePriceOnChange(e) }/>*/}
//             {/*//*/}
//             {/*//     <h1 className="string"> Hi {this.state.name}! You provide {this.state.cuisine} food and your contact number is {this.state.phone}. Your average price per guest is ${this.state.price}. Is your information correct? </h1>*/}
//             {/*//*/}
//             {/*//     <button onClick={this.addToDatabase()}> SUBMIT </button>*/}
//
//                 <ul>
//                     {this.state.food.map(food => <li>
//                         <h2>{food.name}</h2>
//                         <p>{food.cuisine}</p>
//                     </li>)
//                     }
//                 </ul>
//
//             </div>
//         )
//
//     }
// }
//
// export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };

        fetch('http://localhost:4000/food')
            .then(response => response.json())
            .then(data => this.setState({posts: data.items, }));
    }
    render() {
        return (<div>
            Hello World
            <ul>
                {this.state.posts.map(post =>
                <li>
                    <h2>{post.name}</h2>
                    {/*<p>{post.cuisine}</p>*/}
                </li>)}
            </ul>
        </div>);
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Posts />
            </div>
        )
    }
}

export default App;
