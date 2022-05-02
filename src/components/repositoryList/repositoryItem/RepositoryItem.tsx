import React from 'react';
import style from './RepositoryItem.module.scss';


type RepositoryItemProps = {
    title: string;
    description: string;
    url: string;
}

export const RepositoryItem: React.FC<RepositoryItemProps> = ({title, description, url}) => {

    return (
        <div className={style.container}>
            <a className={style.title} href={url} target='_blank' rel="noreferrer">{title}</a>

            <div className={style.description}>
                {description}
            </div>
        </div>
    );
}

