import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux'

class Counter extends Component {
    state = {
        counter: 0,
        stepUp: 5,
        stepDown: 5
    }

    // counterChangedHandler = (action, value) => {
    //     switch (action) {
    //         case 'inc':
    //             this.setState((prevState) => { return { counter: prevState.counter + 1 } })
    //             break;
    //         case 'dec':
    //             this.setState((prevState) => { return { counter: prevState.counter - 1 } })
    //             break;
    //         case 'add':
    //             this.setState((prevState) => { return { counter: prevState.counter + value } })
    //             break;
    //         case 'sub':
    //             this.setState((prevState) => { return { counter: prevState.counter - value } })
    //             break;
    //     }
    // }

    render() {
        return (
            <div>
                <div>
                    <CounterOutput value={this.props.ctr} />
                    <CounterControl label="Increment" clicked={() => this.props.OnIncrement()} />
                    <CounterControl label="Decrement" clicked={() => this.props.OnDecrement()} />
                    <CounterControl label="Add 5" clicked={() => this.props.OnStepUp(5)} />
                    <CounterControl label={`Subtract ${this.state.stepDown}`} clicked={() => this.props.OnStepDown(this.state.stepDown)} />
                </div>
                <div>
                    <ul>
                        {this.props.userNames &&
                            this.props.userNames.map(name => {
                                return <li>{name}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProp = state => {
    return { ctr: state.counter, userNames: state.names }
}

const mapToDispactch = dispatch => {
    return {
        OnIncrement: () => dispatch({ type: 'INCREMENT' }),
        OnDecrement: () => dispatch({ type: 'DECREMENT' }),
        OnStepUp: (count) => dispatch({ type: 'STEPUP', count: count }),
        OnStepDown: (count) => dispatch({ type: 'STEPDOWN', count })
    }
}

export default connect(mapStateToProp, mapToDispactch)(Counter);