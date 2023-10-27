import "./Calculator.css";

function Calculator({ onChangeProps, userInput }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label>Inisial Investment</label>
          <input type="number" value={userInput.intialInvesment} onChange={(e) => onChangeProps("initialInvestment", e.target.value)} />
        </p>
        <p>
          <label>Investasi Tahunan</label>
          <input type="number" value={userInput.annualInvesment} onChange={(e) => onChangeProps("annualInvesment", e.target.value)} />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>perkiraan balik modal</label>
          <input type="number" value={userInput.expectedReturn} onChange={(e) => onChangeProps("expectedReturn", e.target.value)} />
        </p>
        <p>
          <label>Durasi</label>
          <input type="number" value={userInput.duration} onChange={(e) => onChangeProps("duration", e.target.value)} />
        </p>
      </div>
    </form>
  );
}

export default Calculator;
