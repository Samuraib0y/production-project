import React from 'react';
import {t} from "i18next";
import {useTranslation} from "react-i18next";

const MainPage = () => {

    const {t} = useTranslation('main')

    return (
        <div>
            {t('Главная странница')}
        </div>
    );
};

export default MainPage;