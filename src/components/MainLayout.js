import React, { Component } from 'react'
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'
import routes from './routes'
import Header from './home/Header';
import Footer from './home/Footer'
import './style.css'


class MainLayout extends Component {
    render() {
        return (
                <div>
                    <header>
                        <Header/>
                    </header>
                    <div className="contenedor">

                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                    <footer>

                    </footer>
                </div>

        )
    }
}

export default MainLayout;

const NoMatch = ({ location }) => (
    <div>
        <h3>No se encontró la página <code>{location.pathname}</code></h3>
    </div>
)
