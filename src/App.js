import React, { Component } from 'react';
import './App.css';
import cake from './cakes.json'
import Wrapper from './components/Wrapper'
import TopNav from './components/TopNav'
import JumboTron from './components/JumboTron'
import Card from './components/Cards'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        cake: cake,
        unselectedCake: cake
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectCake = type => {
        const findCake = this.state.unselectedCake.find(item => item.type === type);

        if(findCake === undefined) {
            
            this.setState({ 
                message: "Incorrect try again.",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                cake: cake,
                unselectedCake: cake
            });
        }
        else {
            
            const newCake = this.state.unselectedCake.filter(item => item.type !== type);
            
            this.setState({ 
                message: "Correct!",
                curScore: this.state.curScore + 1,
                cake: cake,
                unselectedCake: newCake
            });
        }

        this.shuffleArray(cake);
    };

    render() {
        return (
            <Wrapper>
                <TopNav
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <JumboTron />
                {
                    this.state.cake.map(cake => (
                        <Card
                            type={cake.type}
                            image={cake.image}
                            selectCake={this.selectCake} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

