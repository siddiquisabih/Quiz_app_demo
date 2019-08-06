import React, { Component } from 'react'
import { View, BackHandler } from 'react-native'
import { Text, Container, Header, Left, Body, Right, Button, Icon, Title, Content, ListItem, CheckBox } from 'native-base';

export default class QuestionAnswer extends Component {



    constructor() {
        super()
        this.state = {
            questionAnswer: [
                {
                    question: 'What is the best place in the World?',
                    answers: [{
                        ans: 'Paris',
                        correct: true,
                        isSelected: false
                    },
                    {
                        ans: 'Germany',
                        correct: false,
                        isSelected: false
                    },
                    {
                        ans: 'London',
                        correct: false,
                        isSelected: false
                    },
                    {
                        ans: 'switzerland',
                        correct: false,
                        isSelected: false
                    }]
                },
                {
                    question: 'What is the best place in the Pakistan?',
                    answers: [{
                        ans: 'Karachi',
                        correct: true,
                        isSelected: false
                    },
                    {
                        ans: 'Islamabad',
                        correct: false,
                        isSelected: false
                    },
                    {
                        ans: 'Lahore',
                        correct: false,
                        isSelected: false
                    },
                    {
                        ans: 'Pindi',
                        correct: false,
                        isSelected: false
                    }]
                },
                {
                    question: 'Which is the best programming language?',
                    answers: [{
                        ans: 'React Native',
                        correct: true,
                        isSelected: false
                    },
                    {
                        ans: 'Flutter',
                        correct: false,
                        isSelected: false
                    },
                    {
                        ans: 'Angular',
                        correct: false,
                        isSelected: false
                    },
                    {
                        ans: 'Ionic',
                        correct: false,
                        isSelected: false
                    }]
                },
                {
                    question: 'How many versions of Javascript?',
                    answers: [{
                        ans: '4',
                        correct: true,
                        isSelected: false
                    },
                    {
                        ans: '11',
                        correct: false,
                        isSelected: false
                    },
                    {
                        ans: '2',
                        correct: false,
                        isSelected: false
                    },
                    {
                        ans: '23',
                        correct: false,
                        isSelected: false
                    }]
                },
                {
                    question: 'How is the best in football?',
                    answers: [{
                        ans: 'Messi',
                        correct: true,
                        isSelected: false
                    },
                    {
                        ans: 'Ronaldo',
                        correct: false,
                        isSelected: false
                    },
                    {
                        ans: 'Kaka',
                        correct: false,
                        isSelected: false
                    },
                    {
                        ans: 'Neymar',
                        correct: false,
                        isSelected: false
                    }]
                }

            ],
            count: 0,
            isFinish: false
        }
    }


    selectAnswer(index) {
        var data = this.state.questionAnswer
        console.log(this.state.questionAnswer[this.state.count].answers[index])

        data[this.state.count].answers.map((m, v) => {
            if (v === index) {
                m.isSelected = true
            }
            else {
                m.isSelected = false
            }
        })
        this.setState({ questionAnswer: data })

    }


    renderQuestion() {
        if (this.state.isFinish === false) {
            return (
                <View>
                    <View
                        style={styles.gridCol}>

                        <Text style={styles.gridText} >Q{this.state.count + 1} : </Text>

                        <Text style={styles.gridTextvalue} >{this.state.questionAnswer[this.state.count].question}</Text>



                    </View>

                    <View
                        style={styles.gridColAnswer}>
                        {this.state.questionAnswer[this.state.count].answers.map((m, v) => {
                            return (
                                <View key={v}>
                                    <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                                        <CheckBox checked={m.isSelected} color="#ff8c00" onPress={this.selectAnswer.bind(this, v)} />
                                        <Text style={{ paddingLeft: 20 }}>{m.ans}</Text>
                                    </View>

                                </View>
                            )
                        })}





                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>

                    <Text style={styles.text}>Finish</Text>

                    <Button onPress={this.exitApp.bind(this)} rounded style={styles.buttonStyleExit}>
                        <Text>Close Application</Text>
                    </Button>

                </View>
            )
        }

    }

    exitApp() {
        BackHandler.exitApp();
    }

    next() {
        if (this.state.count !== 4) {
            this.setState({ count: this.state.count + 1, isFinish: false })
        }
        else {
            this.setState({ isFinish: true })
        }
    }

    renderButton() {
        return (
            <Button onPress={this.next.bind(this)} rounded style={styles.buttonStyle}>
                <Text>Next</Text>
            </Button>

        )
    }
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#ff8c00' }}>
                    <Left />
                    <Body>
                        <Title>Quiz App</Title>
                    </Body>
                    <Right />
                </Header>




                <Content>


                    {this.renderQuestion()}


                    {this.state.isFinish === false ? this.renderButton() : null}




                </Content>




            </Container>
        )
    }
}
const styles = {
    gridCol: {
        flexDirection: 'row',
        height: 100,
        padding: 20,
        margin: 20,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#ff8c00',
        width: '90%'
    },
    gridText: {
        color: '#ff8c00',
    },

    gridTextvalue: {
        // textAlign: 'right',
        color: 'black',
        width: '95%'
    },

    gridColAnswer: {
        // flexDirection: 'row',
        height: 220,
        padding: 20,
        margin: 20,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#ff8c00',
    },
    buttonStyle: {
        justifyContent: 'center',
        borderBottomWidth: 0,
        marginBottom: 10,
        marginTop: 10,
        width: '80%',
        marginLeft: '10%',
        backgroundColor: '#ff8c00'
    },
    buttonStyleExit: {
        justifyContent: 'center',
        borderBottomWidth: 0,
        marginBottom: 10,
        marginTop: 10,
        width: '80%',
     
        backgroundColor: '#ff8c00',
        margin: 20
    },


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    text: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'serif',
        paddingTop: '40%',
    }
}