import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from '../../../../shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});

describe('Sidebar button', () => {
    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const togglBtn = screen.getByTestId('sidebarToggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(togglBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
