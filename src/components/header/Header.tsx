import React, {useState} from 'react';
import {useAppDispatch} from "../../state/hooks";
import {fetchUserData} from "../../state/userReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import githubIcon from '../../assets/images/icons-github.svg'
import style from './Header.module.scss';

export const Header = () => {

    const dispatch = useAppDispatch()

    const [userName, setUserName] = useState('')


    const onChangeCallback = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.currentTarget.value)
    }

    const onKeyPressCallback = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(fetchUserData(userName))
            setUserName('')
        }
    }

    return (
        <header className={style.headerContainer}>

            <img className={style.githubIcon} src={githubIcon} alt='githubIcon'/>

            <div className={style.searchInput}>
                <input type='text' value={userName}
                       onChange={onChangeCallback}
                       onKeyPress={onKeyPressCallback}
                       placeholder='Enter GitHub username'/>

                <div className={style.iconSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
            </div>


        </header>
    );
}

