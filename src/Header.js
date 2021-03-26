import './header.css';

import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import logo from './assets/logo.png';

const Header = ({ keycloak }) => {
    const history = useHistory();
    return (
        <div>
            <div className="tool-bar">
                <div className="row">
                    <div className="col-md-4 logo">
                        <NavLink to="/">
                            <img alt="user-logo" src={logo} />
                        </NavLink>
                    </div>
                    <div className="col-4 header-padding">
                        <div className="item search">
                            <input type="text" className="search-text" placeholder="Health Grant " />
                            <div className="icon-button d-flex justify-content-end">
                                <button>
                                    <SearchOutlined />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 header-padding pr-5">
                        <div className="d-flex justify-content-end">
                            A A A
                    </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-4 text-center">
                        <Button type="link" className='px-4 text-dark selected'>All</Button>
                        <Button type="link" className='px-4 text-dark'>Web</Button>
                        <Button type="link" className='px-4 text-dark'>Images</Button>
                        <Button type="link" className='px-4 text-dark'>Social</Button>
                        <Button type="link" className='px-4 text-dark'>Documents</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
