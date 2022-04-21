import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        Bill Tracker JS
      </header>
      <ul className="Current-Bills"> 
        <li>To be Populated by MySQL Server Through JS</li>
      </ul>
      <form>
        <label for="BName">Bill Title</label><br/>
        <input type="text" name="BName" value="Bill Name"/><br/>
        <label for="BCost">Bill Cost</label><br/>
        <input type="number" name="BCost"/><br/>
        <label for="BDue">Bill Due Date</label><br/>
        <input type="date" name="BDue"/> <br/><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
