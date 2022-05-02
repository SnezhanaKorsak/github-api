import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../state/hooks";
import {RepositoryItem} from "../repositoryItem/RepositoryItem";
import {fetchUserRepositories} from "../../../state/userReducer";
import {Paginator} from "../../../common/paginator/Paginator";
import style from './RepositoryListFull.module.scss';

export const RepositoryListFull = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.userData)
    const repositoriesList = useAppSelector(state => state.user.repositories)


    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        dispatch(fetchUserRepositories(user ? user.login : '', currentPage))
    }, [currentPage])

    useEffect(() => {
        setCurrentPage(1)
        dispatch(fetchUserRepositories(user ? user.login : ''))
    }, [user])

    if (!user) {
        return null
    }

    const repositoriesCount = user.public_repos
    const mappedItems = repositoriesList.map(repository => <RepositoryItem key={repository.id}
                                                                           title={repository.name}
                                                                           description={repository.description}
                                                                           url={repository.html_url}/>)

    return (
        <div className={style.container}>
            <h1 className={style.title}>
                Repositories ({repositoriesCount})
            </h1>

            <div className={style.list}>{mappedItems}</div>

            {repositoriesCount > 4 && <Paginator repositoriesCount={repositoriesCount}
                                                 currentPage={currentPage}
                                                 setCurrentPage={setCurrentPage}/>}
        </div>
    );
}

