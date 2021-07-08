import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


export default class Contador extends React.Component {

    state = {
        numero: 1
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }
    
    dec = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }

    render() {
        return (

            <div>
                <Button className="btn" onClick={this.dec}>-</Button>
                <Input
                    className="Qtde"
                    value={this.state.numero}
                    readonly
                ></Input>
                <Button className="btn" onClick={this.inc}>+</Button>
            </div>

        )
    }
}