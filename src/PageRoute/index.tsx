import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Grid from '../components/css-concept/grid-layout';
import Home from '../components/static-pages/home';

import './index.css';

export default class PageRoute extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div className="page-route">
                    <nav className="page-route__nav">
                        <h1>css概念</h1>
                        <ul>
                            <li>
                                <Link to="/css/grid">Grid布局</Link>
                            </li>
                            <li>
                                <Link to="/css/flexbox">Flex布局</Link>
                            </li>
                        </ul>
                        <h1>css样式</h1>
                        <ul>
                            <li>
                                <a>样式1</a>
                            </li>
                            <li>
                                <a>样式2</a>
                            </li>
                            <li>
                                <a>样式3</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="page-route__maincontent">
                        <Route exact={true} path="/" component={Home} />
                        <Route exact={true} path="/css/grid" component={Grid} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
