import '../components/SelectedCurrencies.css';

type SelectedCurrenciesProps = {
    selectedCurrencies: string[];
    selectCurrency: (currency: string) => void;
};

const SelectedCurrencies = ({ selectedCurrencies, selectCurrency }: SelectedCurrenciesProps) => (
    <div className="selected-currency-container">
        {selectedCurrencies.length === 0
            ? ''
            : selectedCurrencies.map((currency: string, index: number) => (
                  <div className="selected-currency" key={index}>
                      {currency}
                      <div
                          className="delete-icon"
                          onClick={() => {
                              selectCurrency(currency);
                          }}
                      ></div>
                  </div>
              ))}
    </div>
);

export default SelectedCurrencies;
