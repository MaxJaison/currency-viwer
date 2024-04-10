import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import SelectedCurrencies from '../components/SelectedCurrencies.tsx';

const mockCallback = vi.fn();

test('check if there is selected currency', async () => {
    const selectedCurrenciesList = render(<SelectedCurrencies selectedCurrencies={['EUR']} selectCurrency={mockCallback} />);
    const selectedCurrency = await selectedCurrenciesList.findByText('EUR');
    expect(selectedCurrency).to.exist;
    selectedCurrenciesList.unmount();
});

test('create SelectedCurrencies snapshot', async () => {
    const { asFragment } = render(<SelectedCurrencies selectedCurrencies={[]} selectCurrency={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
});
