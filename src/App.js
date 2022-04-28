import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="row">
          <p>Distance lecture</p>
        </div>
        <div class="row">
          <div class="left">
            <p>side left</p>
            <div class="teacher">
              <h1>Teacher info</h1>
              <img src="" alt="" />
              <h2>teacher name</h2>
              <h2>teacher mail</h2>
              <p>
                här kommer information om läraren som ska hämtas från database
                skparen gör ett statisk till och börja med
              </p>
            </div>
            <div class="course">
              <h1>Course info</h1>
              <h2>Courese name</h2>
              <h2>Courese number</h2>
              <h2>module</h2>
              <p>
                här kommer information om kursen som ska hämtas från database
                skaparen gör ett statisk till och börja med
              </p>
            </div>
          </div>
          <div class="middle">
            <p>middle</p>
            <div class="projector">
              <h1>Projectors info</h1>
              <div class="allproj">
                <div class="aproj">
                  <h1>prj.1</h1>
                  <h2>ON/OFF</h2>
                </div>
                <div class="aproj">
                  <h1>prj.2</h1>
                  <h2>ON/OFF</h2>
                </div>
                <div class="aproj">
                  <h1>prj.2</h1>
                  <h2>ON/OFF</h2>
                </div>
              </div>

              <p>
                här kommer information om kursen som ska hämtas från database
                skaparen gör ett statisk till och börja med
              </p>
            </div>

            <div class="temp">
              <h1>Temperature info</h1>
              <p>
                här kommer information om temp som ska hämtas från database
                skaparen gör ett statisk till och börja med
              </p>
            </div>
            <div class="fukt">
              <h1>fukt info</h1>
              <p>
                här kommer information om fukt som ska hämtas från database
                skaparen gör ett statisk till och börja med
              </p>
            </div>
            <div class="luft">
              <h1>luft kvalite info</h1>
              <p>
                här kommer information om luft kvalite som ska hämtas från
                database skaparen gör ett statisk till och börja med
              </p>
            </div>
          </div>
          <div class="right">
            <p>side right</p>
            <div class="lecture">
              <h1>Lecture info</h1>
              <h2>Content</h2>
              <h2>Time _:_</h2>
              <h2>Attend: _</h2>
              <h2>Absence: _</h2>
              <h2>Student info</h2>
              <p>
                här kommer information om aktiva ämnet som ska hämtas från
                database skaparen gör ett statisk till och börja med
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
