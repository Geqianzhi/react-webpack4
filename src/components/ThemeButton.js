import React, { Component } from 'react'
import {ThemeContext}  from '../context/context'
import { Button} from 'antd';
export default class ThemeButton extends Component {
    static contextType = ThemeContext;
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <div>
                <Button
                type={theme.type}
                onClick={props.changetheme}
                >
                    {props.children}
                </Button>
            </div>
        )
    }
}
