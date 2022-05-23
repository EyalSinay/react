import "./13.2-avatars.style.css"
import React from "react";
import axios from "axios";
import Card from "./Card";

class AvatarsEx extends React.Component {
    state = { myAvatars: [], inputValue: "" };

    componentDidMount() {
        for (let i = 0; i < 10; i++) {
            this.getRandomAvatar();
        }
    }

    getRandomAvatar = async () => {
        const response = await axios("https://randomuser.me/api/");
        const results = response.data.results[0];
        // console.log(results);
        this.setState(prev => {
            const newArr = [...prev.myAvatars];
            newArr.push({
                titleName: results.name.title,
                firstName: results.name.first,
                lastName: results.name.last,
                picture: results.picture.large,
                getFullName() {
                    return `${this.titleName} ${this.firstName} ${this.lastName}`;
                }
            });
            return { myAvatars: newArr }
        });
    }

    getCardsArr = () => {
        const newArr = [...this.state.myAvatars].filter(avatar => avatar.firstName.toUpperCase().includes(this.state.inputValue.toUpperCase()));
        return newArr.map((obj, index) => < Card key={index} name={obj.getFullName()} imgSrc={obj.picture} />);
    }

    onInputChange = (e) => {
        const input = e.target.value;
        this.setState({ inputValue: input });
    }

    render() {
        return (
            <div>
                <div className="input">
                    <label htmlFor="text">Search user by name:</label>
                    <input type="text" name="text" id="text" onChange={this.onInputChange} value={this.state.inputValue} />
                </div>
                <div className="avatars-container">
                    {this.getCardsArr()}
                </div>
            </div>
        );
    }
}

export default AvatarsEx;