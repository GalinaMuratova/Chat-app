import React, {useEffect} from 'react';
import './App.css'

const App = () => {


    useEffect(() => {
        const interval = setInterval(() => {
            console.log("hi");
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log('fetch');
    }, []);


    return (
      <div className="container">
          <div className="container">
              <h1>Chat App</h1>
              <div className="content" id="content"></div>
              <div className="row">
                  <div className="col-md-12">
                      <form id="send">
                          <div className="form-group">
                              <label htmlFor="author">Author:</label>
                              <input type="text" className="form-control" id="author"/>
                          </div>
                          <div className="form-group">
                              <label htmlFor="message">Message:</label>
                              <textarea className="form-control" id="message"></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">Send</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default App;
