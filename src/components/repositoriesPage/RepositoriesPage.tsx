import React from 'react';
import {UserInfo} from "../userInfo/UserInfo";
import {RepositoryListEmpty} from "../repositoryList/repositoryListEmpty/RepositoryListEmpty";
import {RepositoryListFull} from '../repositoryList/repositoryListFull/RepositoryListFull';
import {useAppSelector} from "../../state/hooks";
import style from './RepositoriesPage.module.scss';

export const RepositoriesPage = () => {

    const repositoriesCount = useAppSelector(state => state.user.userData?.public_repos)

    return (
        <div className={style.container}>
            <div className={style.user}>
                <UserInfo/>
            </div>
            {repositoriesCount !== 0
                ? <RepositoryListFull/>
                : <RepositoryListEmpty/>
            }
        </div>
    );
}

