import React, {useEffect, useState} from 'react';
import './App.css'

const App = () => {
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const [allInfo, setAllInfo] = useState<{ author: string; message: string; datetime: string; }[]>([]);
    const [dateTime, setDateTime] = useState('');

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
