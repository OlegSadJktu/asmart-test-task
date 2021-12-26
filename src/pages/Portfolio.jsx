import React from 'react';
import '../styles/portfolio.css';
import linkIcon from '../img/link.img';
import example1 from '../img/examples/img_project_1.png';
import example2 from '../img/examples/img_project_3.png';
import example3 from '../img/examples/img_project_5.png';
import example4 from '../img/examples/img_project_2.png';

import newProject from '../img/newProject.png';

const examplesData = [
    {
        title: 'Ресторан Diamonds',
        cardTitle: 'Дизайн сайта для ресторана\n' + 'Diamonds',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного',
        isNewProject: true,
        backColor: '#52504F',
        textColor: '#FFFFFF',
        image: example1,
        link: '',
        linkText: 'diamonds.ru',
    },
    {
        title: 'Интернет-магазин Keeper',
        cardTitle: 'Дизайн интернет-магазина для производителя спортивной формы Keeper',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать всякий бред, чтобы',
        isNewProject: false,
        backColor: '#006CB1',
        textColor: '#FFFFFF',
        image: example2,
        link: '',
        linkText: 'keeper.ru',
    },
    {
        title: 'Приложение Здесь.Еда',
        cardTitle: 'Дизайн сайта для ресторана\n' + 'Diamonds',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного',
        isNewProject: false,
        backColor: '#F5C68C',
        textColor: '#595959',
        image: example3,
        link: '',
    },
    {
        title: 'Логотип для компании Успех',
        cardTitle: 'Дизайн сайта для ресторана\n' + 'Diamonds',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного',
        isNewProject: true,
        backColor: '#008ACE',
        textColor: '#FFFFFF',
        image: example4,
        link: '',
    },
];

const EllipseField = (props) => {
    const { text, bold } = props;
    let classes = 'ellipse-field';
    if (bold) {
        classes += ' bold';
    }

    return (
        <div className={classes }>
            <span>{text}</span>
        </div>
    );
};

const Portfolio = () => {
    return (
        <div className={'container'}>
            <div className="row">

                <div className={'left-menu col-sm-3'}>
                    <EllipseField bold={true} text={'Выберите сферу бизнеса'}/>
                    <hr/>
                    <EllipseField bold={true} text={'Все проекты'}/>
                    <EllipseField text={'Сайт-визитка'}/>
                    <EllipseField text={'Лендинг'}/>

                </div>
                <main className={'col-sm-9'}>
                    <h1>Портфолио</h1>
                    <h6>Более 500 успешных проектов</h6>

                    {examplesData.map((item) => (
                        <Example item={item}/>
                    ))}

                </main>
            </div>

        </div>
    );
};

const Example = (props) => {
    const { title, linkText, cardTitle, description, backColor, textColor, image, isNewProject } = props.item;
    const style = {
        backgroundColor: backColor,
        color: textColor,
    };
    return (
        <div className={'projects-examples'}>
            <div className="row justify-content-between align-items-center">
                <div className="col-auto me-auto">
                    <h2>{title}</h2>
                </div>

                {linkText != null ? (
                    <div className="col-auto site-link">
                        <span>{linkText}</span>
                        <img src={linkIcon} alt=""/>
                    </div>
                ) : null }

                <hr/>
            </div>
            <div className="card-example" style={style}>
                { isNewProject ? (
                    <div className="new-project-banner">
                        <img src={newProject} alt=""/>
                    </div>
                ) : null }

                <div className="row">
                    <div className="col-sm-6 information">
                        <p className="title">{cardTitle}</p>
                        <p className="description">{description}</p>
                        <p className="view">Посмотреть <span>•</span></p>
                    </div>
                    <div className="col-sm-6 image ">
                        <img src={image} alt=""/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Portfolio;
