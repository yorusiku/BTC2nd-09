import { LCDClient, MnemonicKey } from '@terra-money/terra.js';
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  CardText,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
} from "reactstrap";
import { UseState } from "react";

import luna from "../../../assets/images/logos/luna.jpg";
//import { useLocation } from "react-router-dom";

const Forms = () => {
  const MNE_KEY_RANDOM = new MnemonicKey();
  const terra = new LCDClient({
    URL: "https://bombay-lcd.terra.dev/",
    chainID: "bombay-12",
  });
  //const wallet = terra.wallet(MNE_KEY_RANDOM);

  // ANC on bombay-12
  const walletAddress = 'terra12sjx2nhe4vls0g9y55umk64zv87wxv48v0ut8v';
  //const tokenAddress = 'terra1747mad58h0w4y589y3sk84r5efqdev9q4r02pc';
  //const response = terra.wasm.contractQuery(tokenAddress, { balance: { address: MNE_KEY_RANDOM.accAddress }});
  //const walletBanace = terra.bank.balance(walletAddress);
  async function getMyBalance(address){
    const [balance] = await terra.bank.balance(address);
    const result = balance.toData()[0].amount;
    console.log(typeof(result));
    tableData[0].balance = result;
    console.log("dd")
    console.log(tableData)
    return result;
  }
  function fun2 () {
    const [inputValue, setInputValue] = UseState('');
    const onChange = (e) => {
      setInputValue(e.target.value);
    }
    return(
      <>
      <input type="text" value={inputValue} onChange={onChange} />
      <p>{inputValue}</p>
    </>
    )
    console.log("123123")
  }

  
  const temp = "12345677";
  const aa = getMyBalance(walletAddress);

  console.log("1. bb")
  //const myBalance = getMyBalance(walletAddress);
  const tableData = [
    {
      avatar: luna,
      name: "Terra",
      ticker: "LUNA",
      // balance: temp,
      balance: "152.511184",
      address: walletAddress
    },

  ];

  console.log(tableData)

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

                  <td>{tdata.balance} Luna</td>
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
                <Label for="address">to Address</Label>
                <Input
                  placeholder="받으실 분의 지갑 주소"
                />
              </FormGroup>
              
              <FormGroup>
                <Label for="amount">Amount</Label>
                <Input id="tranferAmount" name="amount" 
                placeholder="전송할 수량"
                />
              </FormGroup>
              
              <FormGroup check>
                <Input type="checkbox" /> <Label check>확인하였습니다.</Label>
              </FormGroup>
              <Button Link to="/test" className="btn" color="primary" size="lg">
                  Transfer
                </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
