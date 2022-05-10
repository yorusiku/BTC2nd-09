import { LCDClient, MnemonicKey, MsgSend, isTxError } from '@terra-money/terra.js';
import { Card, Row, Col, CardTitle, CardBody, CardText, Button, 
  Form, FormGroup, Label, Input, Table } from "reactstrap";
import { useState } from "react";
import { Route, link, useParams, useLocation } from "react-router-dom";
import luna from "../../../assets/images/logos/luna.jpg";

function WalletBalanceTransfer(){
  const [ mybalance, changeBalance ] = useState('0');
  const MNE_KEY = useLocation().state;
  console.log(MNE_KEY)

  // ANC on bombay-12
  const terra = new LCDClient({
    URL: "https://bombay-lcd.terra.dev/",
    chainID: "bombay-12",
  });

  //const walletAddress = 'terra12sjx2nhe4vls0g9y55umk64zv87wxv48v0ut8v';
  //const tokenAddress = 'terra1747mad58h0w4y589y3sk84r5efqdev9q4r02pc';
  //const response = terra.wasm.contractQuery(tokenAddress, { balance: { address: MNE_KEY_RANDOM.accAddress }});
  //const walletBanace = terra.bank.balance(walletAddress);
  const myWallet = terra.wallet(MNE_KEY.mne_key);
  const walletAddress = MNE_KEY.accAddress;
  async function getMyBalance(address){
    const [balance] = await terra.bank.balance(address);
    let result = 0;
    if ( balance.toData()[0]){
      result = balance.toData()[0].amount;
    }
    tableData[0].balance = result;
    changeBalance(result)
    return result
  }

  getMyBalance(walletAddress);

  const tableData = [
    {
      avatar: luna,
      name: "Terra",
      ticker: "LUNA",
      balance: mybalance,
      address: walletAddress
    },
  ];

  console.log("Table data: ", tableData)

  

  const [transferAddress, setTransferAddress] = useState('')
  const [transferAmount, setTransferAmount] = useState('')
  const handleTransferAddress = (e) => {
    setTransferAddress(e.target.value)
  }
  const handleTransferAmount = (e) => {
    setTransferAmount(e.target.value)
  }

  //임시 테스트용 지갑
  const MNE_KEY_RANDOM = new MnemonicKey();
  const myWallet2 = terra.wallet(MNE_KEY_RANDOM);

  async function transferHandler() {
    console.log('start transaction')
    const send = new MsgSend(
      walletAddress,
      "terra12sjx2nhe4vls0g9y55umk64zv87wxv48v0ut8v",
      { uluna: 1000 }
    );
    console.log("send :",send);
    
    // transaction error 확인중
    const tx = myWallet.createAndSignTx({
      msgs: [send],
      memo: "Hello"
    });
    console.log("tx :",tx);
    const txResult = terra.tx.broadcast(tx);


    console.log("Transfer complete")
    console.log(transferAddress)
    console.log(transferAmount)
    if (isTxError(txResult)) {
      throw new Error(`encountered an error while running the transaction: ${txResult.code} ${txResult.codespace}`);
    }
    console.log(txResult.logs[0].eventsByType.store_code);
    console.log("Transfer complete real")
  }

  return (
    <Row>
      <Col>
        <Card style={{ width: '55rem' }}>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Wallet Balance 개발중
          </CardTitle>
          <CardBody className="">
          <div>
          <Row>
        <Col md="6" lg="9">
          <Card body color="primary" inverse>
            <CardTitle tag="h4">Wallet Address</CardTitle>
            <CardText>
            {tableData.map((tdata, index) => (
                  <td>{tdata.address}</td>
              ))}
            </CardText>
          </Card>
        </Col>
        </Row>
        </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Assets</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.ticker}</span>
                      </div>
                    </div>
                  </td>
                  <td>{mybalance} Luna</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
        </Card>
        <Card style={{ width: '55rem' }}>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Wallet Transfer 개발중
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="address">To Address</Label>
                <Input onChange={handleTransferAddress} id="transferAddress"
                  placeholder="받으실 분의 지갑 주소"
                />
              </FormGroup>
              <FormGroup>
                <Label for="amount">Amount(LUNA)</Label>
                <Input onChange={handleTransferAmount} id="transferAmount"
                placeholder="전송할 수량"
                />
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" /> <Label check>확인하였습니다.</Label>
              </FormGroup>
              <Button onClick={transferHandler} className="btn" color="primary" size="lg">
                  Transfer
                </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default WalletBalanceTransfer;
