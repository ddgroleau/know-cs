import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import QuestionRoot from "./QuestionRoot";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result"

class KnowCS extends Component {
    state = {
        questionSet: [],
        score: 0,
        responses: 0
    };
    getQuestions = () => {
        QuestionRoot().then(question => {
            this.setState({
                questionSet: question
            });
        });
    };
    getAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this. setState({
            score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        });
    }
    resetInstance = () => {
        this.getQuestions();
        this.setState({
            questionSet: [],
            score: 0,
            responses: 0
        });
    };
    componentDidMount() {
        this.getQuestions();
    }
    render() {
        return (
            <div className="container">
                <div className="title">Know CS: Algorithms, Data Structures and Concepts</div>
                {this.state.questionSet.length > 0 && 
                this.state.responses < 5 &&
                this.state.questionSet.map(
                    ({question, answers, correct, questionID}) => (
                        <QuestionBox 
                        question={question}
                        options={answers}
                        key={questionID}
                        selected={answer => this.getAnswer(answer, correct)}
                        />
                    )
                )}
                {this.state.responses === 5 ? (<Result 
                score={this.state.score}
                resetInstance={this.resetInstance}
                />) : null } 
            </div>
        );
    }
}

ReactDOM.render(<KnowCS />, document.getElementById("root"));

