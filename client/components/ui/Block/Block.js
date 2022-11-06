import Li from "../Li";

const Block = ({ currency, value, onChangeCurrency, onChangeValue }) => {
  const defaultCurrencies = ["RUB", "USD", "EUR", "GBP"];
  return (
    <div className="flex flex-col gap-3">
      <ul className="flex">
        {defaultCurrencies.map((cur) => (
          <Li
            key={cur}
            onClick={() => onChangeCurrency(cur)}
            className={`${currency === cur ? "active" : ""}`}
          >
            {cur}
          </Li>
        ))}
      </ul>
      <input
        placeholder="0"
        className="flex w-full h-16 p-3 border-none bg-orange-100"
        type="number"
        value={value}
        onChange={(e) => {
          onChangeValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Block;
