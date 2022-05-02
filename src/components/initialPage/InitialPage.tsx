import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import style from './InitialPage.module.scss';


export const InitialPage = () => {

    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <div className={style.iconSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>

                <div className={style.text}>
                    Start with searching a GitHub user
                </div>
            </div>
        </div>
    );
}

