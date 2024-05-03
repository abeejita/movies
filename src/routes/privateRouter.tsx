import React from 'react';
import {Outlet} from 'react-router-dom';
import {Header} from '../components/Header';

const PrivateRouter = () => {
    return (
        <div>
            <Header/>
            <div className="m-10">
                <Outlet/>
            </div>
        </div>
    )
}

export default PrivateRouter