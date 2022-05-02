import React from 'react';
import style from './UserNotFoundPage.module.scss';


export const UserNotFoundPage = () => {

    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <div className={style.userIcon}>
                    <div className={style.union}>
                        <div className={style.ellipseTop}/>
                        <div className={style.ellipseBody}/>
                    </div>
                </div>

                <div className={style.text}>
                    User not found
                </div>
            </div>
        </div>
    );
}

