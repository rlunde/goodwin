import React from 'react';
import { Button } from 'react-bootstrap';
export default class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <input className="chat-input" type="text" placeholder="Your message" />
                <Button bsSize="large" className="msg-send" >send</Button>
            </div>
        );
    }
}
