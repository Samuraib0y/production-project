import React from 'react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {/* <BugButton /> */}
            {t('Главная странница')}
        </div>
    );
};

export default MainPage;
