import React from 'react';
import {UserNotFoundPage} from "../userNotFoundPage/UserNotFoundPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {useAppSelector} from "../../state/hooks";
import groupIcon from '../../assets/images/group.svg';
import style from './UserInfo.module.scss';

const getNumberRounding = (value: number) => (value / 1000).toFixed(1)


export const UserInfo = () => {

    const user = useAppSelector(state => state.user.userData)

    if (!user) {
        return <UserNotFoundPage/>
    }

    const followersNumber = user.followers > 1000 ? getNumberRounding(user.followers) : user.followers

    const followingNumber = user.following > 1000 ? getNumberRounding(user.following) : user.following

    return (
        <div className={style.container}>
            <div className={style.avatar}>
                <img src={user.avatar_url} alt='userAvatar'/>
            </div>
            <div className={style.info}>
                <div>
                    <span className={style.name}>
                    {user.name}
                </span>
                    <span className={style.nickname}>
                        <a href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a>
                </span>
                </div>

                <div className={style.followersDescription}>
                    <div className={style.followers}>
                        <span className={style.icon}>
                            <img src={groupIcon} alt='group'/>
                        </span>
                        <span className={style.description}>
                           {`${followersNumber} followers`}
                        </span>
                    </div>
                    <div className={style.following}>
                        <span className={style.icon}>
                            <FontAwesomeIcon icon={faUser}/>
                        </span>
                        <span className={style.description}>
                            {`${followingNumber} following`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

