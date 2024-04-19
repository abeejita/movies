import {Link} from 'react-router-dom';
import React from 'react';
import {ROUTES} from "../../routes/constants";
import './Header.css';

const Header: React.FC = () => {
    return (
        <div className="navbar">
            <div className="title">
                Movies DB
            </div>
            <div className="categories">
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={ROUTES.HOME}>HOME</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={ROUTES.POPULAR}>POPULAR</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={ROUTES.RATED}>TOP RATED</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={ROUTES.PLAYING}>NOW PLAYING</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={ROUTES.FAVORITES}>MY FAVORITES</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header