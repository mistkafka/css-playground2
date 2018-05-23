import axios from 'axios';
import * as React from 'react';
import {
    UnControlled as CodeMirror,
} from 'react-codemirror2';
import * as XmlFormator from 'xml-formatter';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/theme/material.css';
import "./index.css";

interface IState {
    cssText: string,
    htmlText: string,
}

export default class GridLayoutComponent extends React.Component<{}, IState> {
    
    private htmlRef: any;

    constructor(props: {}) {
        super(props);

        this.state = {
            cssText: "",
            htmlText: "",
        };

        this.htmlRef = React.createRef();
    }
    
    public render () {
        return (
            <div>
                <CodeMirror
                    value={this.state.htmlText}
                    options={{
                        lineNumbers: true,
                        mode: 'htmlmixed',
                        theme: 'material'
                    }}
                />
                <CodeMirror
                    value={this.state.cssText}
                    options={{
                        lineNumbers: true,
                        mode: 'css',
                        theme: 'material'
                    }}
                />
                <hr />
                <div className="grid__playground" ref={this.htmlRef}>
                    <div className="grid-container">
                        <div className="grid-item">
                            A Grid Item
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public componentDidMount() {
        axios.get(`/index.css`, {
            headers: {
                "Content-Type": "text/plain; charset=UTF-8"
            }
        }).then(res => {
            this.setState({
                cssText: res.data,
            });
        });

        let htmlText = this.htmlRef.current.outerHTML;
        htmlText = XmlFormator(htmlText);
        this.setState({
            htmlText,
        });
    }
}
