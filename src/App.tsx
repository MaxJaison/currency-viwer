import './App.css';
import { useState } from 'react';
import SelectedCurrencies from './components/SelectedCurrencies.tsx';
import CurrenciesList from './components/CurrenciesList.tsx';

const App = () => {
    const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);

    const selectCurrency = (currency: string) => {
        let updatedSelectedCurrencyList: string[] = [...selectedCurrencies];
        if (selectedCurrencies.includes(currency)) {
            updatedSelectedCurrencyList = updatedSelectedCurrencyList.filter((cur: string) => cur !== currency);
        } else {
            updatedSelectedCurrencyList.push(currency);
        }
        setSelectedCurrencies(updatedSelectedCurrencyList);
    };

    return (
        <>
            <div className="wrapper">
                <SelectedCurrencies selectedCurrencies={selectedCurrencies} selectCurrency={selectCurrency} />
                <CurrenciesList selectedCurrencies={selectedCurrencies} selectCurrency={selectCurrency} />
            </div>
        </>
    );
};

export default App;
