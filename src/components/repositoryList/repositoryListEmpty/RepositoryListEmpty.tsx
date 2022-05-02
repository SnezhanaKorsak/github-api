import React from 'react';
import style from './RepositoryListEmpty.module.scss';


export const RepositoryListEmpty = () => {
    return (
        <div className={style.repositories}>
            <div className={style.container}>
                <div className={style.iconContainer}>
                    <span className={style.icon}/>
                </div>
                <div className={style.description}>
                    Repository list is empty
                </div>
            </div>
        </div>
    );
}

