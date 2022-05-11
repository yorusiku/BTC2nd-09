import './App.css';
import { Link } from "react-router-dom";
import "./app.scss";
import axios from "axios";
import { Spinner, DropdownButton, Dropdown } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function App() {
  const [lastBlocks, setLastBlocks] = useState([[], [], [], []]);
  const [lastTransactions, setLastTransactions] = useState([]);
  const [lastBlocks_Loading, setLastBlocks_Loading] = useState(false);
  const [lastTransactions_Loading, setlastTransactions_Loading] = useState(false);
  const [now_input, setNow_input] = useState("");

  async function reload_LastBlock() {
    //라스트 블럭 리프레시
    setLastBlocks_Loading(true);
    await axios.get(`http://localhost:3001/callblocks/shard`).then((result) => {
      setLastBlocks(result.data.data);
      setLastBlocks_Loading(false);
    });
  }
  async function reload_LastTransaction() {
    //라스트 트랜잭션 리프레시
    setlastTransactions_Loading(true);
    await axios.get("http://localhost:3001/calltransaction").then((result) => {
      setLastTransactions(result.data.data);
      setlastTransactions_Loading(false);
    });
  }

  useEffect(() => {
    load_LastBlock();
    load_LastTransaction();
    async function load_LastBlock() {
      //라스트 블럭 조회
      setLastBlocks_Loading(true);
      await axios.get(`http://localhost:3001/callblocks/shard`).then((result) => {
        setLastBlocks(result.data.data);
        setLastBlocks_Loading(false);
      });
    }
    async function load_LastTransaction() {
      //라스트 트랜잭션 조회
      setlastTransactions_Loading(true);
      await axios.get("http://localhost:3001/calltransaction").then((result) => {
        setLastTransactions(result.data.data);
        setlastTransactions_Loading(false);
      });
    }

    let timer = setInterval(() => {
      // 실시간 리프레시
      load_LastBlock();
      load_LastTransaction();
    }, 5000); //9초마다 자동 리프레시 한다.
    return () => {
      clearInterval(timer);
    };
  }, []);

  function nowInput(e) {
    // 서치에 들어오는 애를 넣어놓는다.
    setNow_input(e.target.value);
  }


  const click_SearchIcon = () => {
    //검색창에 검색아이콘을 누를 시 검색이 작동된다.

    if (now_input !== "") {
      if (now_input.slice(0, 3) === "one" && now_input.length === 42) {
        //계좌 검색

      } else if (isNaN(Number(now_input)) === false && now_input.slice(0, 2) !== "0x") {
        
        //블록 검색
      } else if (now_input.slice(0, 2) === "0x" && now_input.length === 66) {
        //트랜잭션 검색
        
      }
    } else {
      document.location.href = "/";
    }
  };

  return (
    <div className="main">
      {/* searchbar */}
      <div className="searchBar">
        <div className="searchIcon">
          <span className="material-icons search" onClick={click_SearchIcon}>
            search
          </span>
        </div>
        <input
          className="searchBlock"
          placeholder="Search by Address / Transaction Hash / Block"
          onChange={(e) => nowInput(e)}
        />
      </div>
      <div className="main_set">
        <div className="Last_Transactions">
          <div className="title">🔐 Last Transactions</div>
{/* 
          {lastTransactions_Loading ? (
            <Spinner animation="border" variant="primary" className="lastBlock_spinner" />
          ) : (
            <div className="transaction_category">
              <div className="Shard">
                Shard
                {lastTransactions.map((block, index) => {
                  return (
                    <div key={index} className="Shard_set">
                      {block.shard}
                    </div>
                  );
                })}
              </div>
              <div className="Hash">
                Hash
                {lastTransactions.map((block, index) => {
                  return (
                    <Link to={`/transaction/${block.hash}`} className="noneDeco">
                      <div key={index} className="Common_set">
                        {block.hash.slice(0, 4) + "..." + block.hash.slice(-4)}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="From">
                From
                {lastTransactions.map((block, index) => {
                  return (
                    <Link to={`/dnw/${block.from}`} className="noneDeco">
                      <div key={index} className="Common_set">
                        {block.from.slice(0, 4) + "..." + block.from.slice(-4)}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="To">
                To
                {lastTransactions.map((block, index) => {
                  return (
                    <Link to={`/dnw/${block.to}`} className="noneDeco">
                      <div key={index} className="Common_set">
                        {block.to.slice(0, 4) + "..." + block.to.slice(-4)}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="Timestamp2">
                Timestamp
                {lastTransactions.map((block, index) => {
                  return (
                    <div key={index} className="Timestamp_set">
                      {block.timestamp}
                    </div>
                  );
                })}
              </div>
            </div>
          )} */}
          {/* {라스트 트랜잭션 리프레시} */
          /* <div className="refresh_box" onClick={reload_LastTransaction}>
            <span className="material-icons refresh_logo">refresh</span>
            <div className="refresh_set">Refresh</div>
          </div> */}
        </div>
      </div>
    </div>
  )};

export default App;
