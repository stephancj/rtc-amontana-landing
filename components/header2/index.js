import Image from 'next/image'
import React, { Component } from 'react'
import Link from 'next/link'
import MobileMenu from '../../components/MobileMenu'
import HeaderTopbar from '../HeaderTopbar'

export default class Header2 extends Component {

    state = {
        isSearchShow: false,
    }

    searchHandler = () => {
        this.setState({
            isSearchShow: !this.state.isSearchShow
        })
    }

    render() {
        const { isSearchShow } = this.state;

        const SubmitHandler = (e) => {
            e.preventDefault()
        }

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }

        const goBack = () => {
            window.history.back();
        }

        return (
            <header id="header" className={this.props.topbarNone}>
                <HeaderTopbar />
                <div className={`wpo-site-header ${this.props.hclass}`}>
                    <nav className="navigation navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                    <div className="mobail-menu">
                                        <MobileMenu />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="navbar-header">
                                        <Link onClick={ClickHandler} className="navbar-brand" href="/">
                                            <Image src={this.props.Logo} alt="Rotaract amontana logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-1 col-1">
                                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-2 col-2">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={goBack} className="search-toggle-btn">
                                                <i className={'ti-close'}></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
