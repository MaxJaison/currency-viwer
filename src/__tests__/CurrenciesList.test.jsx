import { expect, test, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import CurrenciesList from '../components/CurrenciesList.tsx';

const mockCallback = vi.fn();

test('check if currency button clicked', async () => {
    const currenciesList = render(<CurrenciesList selectedCurrencies={[]} selectCurrency={mockCallback} />);
    const currencyButton = await currenciesList.findByText('EUR');
    fireEvent.click(currencyButton);
    expect(mockCallback).toBeCalled();
    currenciesList.unmount();
});

test('create CurrenciesList snapshot', async () => {
    const { asFragment } = render(<CurrenciesList selectedCurrencies={[]} selectCurrency={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
});
