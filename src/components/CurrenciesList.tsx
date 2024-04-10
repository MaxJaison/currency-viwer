import '../components/CurrencciesList.css';
import { CURRENCIES } from '../constants.ts';
import { CommonProps } from '../types.ts';

const CurrenciesList = ({ selectedCurrencies, selectCurrency }: CommonProps) => (
    <div className="currencies-list">
        {CURRENCIES.map((currency: string, index: number) => {
            return (
                <button key={index} className={selectedCurrencies.includes(currency) ? 'btn active' : 'btn'} onClick={() => selectCurrency(currency)}>
                    {currency}
                    <input className="checkbox" disabled type="checkbox" id={currency} checked={selectedCurrencies.includes(currency)} />
                    <label className="label" htmlFor={currency}></label>
                </button>
            );
        })}
    </div>
);

export default CurrenciesList;
