import './App.css';
// import './styles/bootstrap.min.css';

import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';

import About from './pages/About';
import Users from './pages/Usres';
import Home from './pages/Home';
import logo from './img/logo.png';
import phone from './img/phone.png';
import Portfolio from './pages/Portfolio';

const Header = () => {
    return (
        <header className={'container-sm'}>
            <div className={'row'}>
                <div className={'col-sm-2 header-logo'}>
                    <Link to={'/'}><img src={logo} alt="text" className={'header-logo-img'}/></Link>
                </div>
                <div className={'col-sm-8 header-menu'}>
                    <div className={'row align-items-center'}>
                        <div className={'col'}><Link to={'/services'}>Услуги</Link></div>
                        <div className={'col'}><Link to={'/portfolio'}>Портфолио</Link></div>
                        <div className={'col'}><Link to={'/price'}>Цены</Link></div>
                        <div className={'col'}><Link to={'/about'}>О компании</Link></div>
                        <div className={'col'}><Link to={'/blog'}>Блог</Link></div>
                        <div className={'col'}><Link to={'contacts'}>Контакты</Link></div>
                    </div>
                </div>
                <div className="col-sm-2 navigation-phone">
                    <img src={phone} width={20} height={20} alt=""/>
                    <span>+7 (3812) 51-95-47</span>
                </div>
            </div>

        </header>
    );
};

function importAll (context) {
    const images = {};
    context.keys().map((item, index) => { images[item.replace('./', '')] = context(item); });
    return images;
}

const Footer = () => {
    const images = importAll(require.context('./img/social_networks', false, /\.(png|jpe?g|svg)$/));
    return (
        <footer className={'container-fluid'}>
            <div className={'container-xl'}>

                <div className="row">
                    <div className="col-sm-6 information">
                        <div><img src={logo} alt=""/></div>
                        <div className="row justify-content-between">
                            <div className="col-auto"><span>Услуги</span></div>
                            <div className="col-auto"><span>Портфолио</span></div>
                            <div className="col-auto"><span>Цены</span></div>
                            <div className="col-auto"><span>О компании</span></div>
                            <div className="col-auto"><span>Блолк</span></div>
                            <div className="col-auto"><span>Контакты</span></div>
                            <div className="col-auto"><span>Политика конфиденциальности</span></div>
                        </div>
                    </div>
                    <div className="col-sm-6 contacts">
                        <span className={'contact-with-us'}>Свяжитесь с нами</span>
                        <div className="row">
                            <div className="col-auto">
                                <span>+7 (3812) 51-95-47</span>
                            </div>
                            <div className="col-auto offset-md-1">
                                <span>
                                    info@asmart-group.ru
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-auto">
                                <span>+7 (905) 941-09-84</span>
                            </div>
                            <div className="col-auto offset-md-1">
                                <span>
                                    г.Омск, Чапаева 111 (Бизнес-инкубатор), офис 6
                                </span>
                            </div>
                        </div>
                        <div className="row social-networks">
                            <div className="col-auto"><img src={images['icon_vk.png']} alt=""/></div>
                            <div className="col-auto"><img src={images['icon_instagram.png']} alt=""/></div>
                            <div className="col-auto"><img src={images['icon_facebook.png']} alt=""/></div>
                            <div className="col-auto"><img src={images['icon_twitter.png']} alt=""/></div>
                            <div className="col-auto"><img src={images['icon_whatsapp.png']} alt=""/></div>
                            <div className="col-auto"><img src={images['icon_viber.png']} alt=""/></div>
                            <div className="col-auto"><img src={images['icon_behance.png']} alt=""/></div>
                            <div className="col-auto"><img src={images['icon_dribble.png']} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

function App () {
    return (
        <div className={''}>
            <Router>
                <Header/>
                <div className={'container-xl'}>
                    <Routes>
                        <Route
                            path="/about"
                            element={<About/>}
                            // children={() => <h1>hello!!!!!</h1>}
                        />
                        <Route path="/users" element={<Users/>}/>
                        <Route path={'/portfolio'} element={<Portfolio/>}/>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
                <Footer/>

            </Router>
        </div>
    );
}

export default App;
