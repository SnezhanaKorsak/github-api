import React from 'react';
import {useAppSelector} from "./state/hooks";
import {Header} from "./components/header/Header";
import {InitialPage} from "./components/initialPage/InitialPage";
import {UserNotFoundPage} from "./components/userNotFoundPage/UserNotFoundPage";
import {RepositoriesPage} from "./components/repositoriesPage/RepositoriesPage";
import {Preloader} from "./common/preloader/Preloader";
import './App.css';

function App() {

    const searchStatus = useAppSelector(state => state.user.searchStatus)

    return (
        <div className='appContainer'>
            <Header/>

            {searchStatus === 'initial' && <InitialPage/>}
            {searchStatus === 'fail' && <UserNotFoundPage/>}
            {searchStatus === 'success' && <RepositoriesPage/>}


            {searchStatus === 'loading' && <div className='preloader'>
                <Preloader/>
            </div>
            }

        </div>
    );
}

export default App;
