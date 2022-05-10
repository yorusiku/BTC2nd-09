import { LCDClient, MnemonicKey } from '@terra-money/terra.js';
import { Card, Row, Col, CardTitle, CardBody, Button, Container } from "reactstrap";
import { useState } from "react";
import { Route, Link } from "react-router-dom";

function WalletImport({props}){
  const [ mnemonic, chageMnemonic ] = useState('');
  const MNE_KEY_RANDOM = new MnemonicKey();
  const MNE_KEY_ARR = MNE_KEY_RANDOM.mnemonic.split(' ');
  console.log(MNE_KEY_RANDOM)
  // MNE_KEY_RANDOM.mnemonic  // buzz lazy ship toy super brisk swarm comic conduct pioneer tray slow before betray matrix cruel cactus brand chat evolve option melody ignore sorry
  // MNE_KEY_RANDOM.privateKey // <Buffer 5f fb 6e a5 12 3f 8c fa 61 b3 2f b8 9c eb fa 7f a2 9d a8 17 c1 3b 7e 84 b1 3c 0c 58 64 ea 48 4b>
  // MNE_KEY_RANDOM.publicKey // SimplePublicKey { key: 'AzQi49+NMie/frj7GcJqzru8cHaeMAq+nW2EGHW93FB/' }
  // MNE_KEY_RANDOM.accAddress // terra12sjx2nhe4vls0g9y55umk64zv87wxv48v0ut8v
  // MNE_KEY_RANDOM.publicKey.key // AzQi49+NMie/frj7GcJqzru8cHaeMAq+nW2EGHW93FB/

  /*
  function makeMenmonic() {
    const MNE_KEY_RANDOM = new MnemonicKey();
    const MNE_KEY_ARR = MNE_KEY_RANDOM.mnemonic.split(' ');
    return MNE_KEY_ARR;
  }*/

  function handleChangeMnemonic() {
    const word = MNE_KEY_RANDOM.mnemonic.split(' ');
    chageMnemonic(word)
  }

    return (
      <Row>
        <Col>
          <Card style={{ width: '55rem' }}>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Wallet Create 개발중 / 24단어 BIP-39 MnemonicKey
            </CardTitle>
            <CardBody>
            <Container>
              <Row className="mt-3">
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[0]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[1]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[2]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[3]}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[4]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[5]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[6]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[7]}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[8]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[9]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[10]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[11]}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[12]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[13]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[14]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[15]}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[16]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[17]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[18]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[19]}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[20]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[21]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[22]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[23]}</div>
                </Col>
              </Row>

            </Container>
            <CardBody className="">
                <div className="button-group">
                  <Button className="btn" onClick={handleChangeMnemonic} color="primary" size="lg">
                    Refresh
                  </Button>
                  <Button className="btn" onClick={handleChangeMnemonic} color="secondary" size="lg">
                    Copy
                  </Button>
                </div>
              </CardBody>
              <CardBody className="">
                <div className="button-group">
                <Link to="/walletBalanceTransfer" 
                  state={{ 
                    mne_key : MNE_KEY_RANDOM,
                    mnemonic: MNE_KEY_RANDOM.mnemonic, 
                    privateKey: MNE_KEY_RANDOM.privateKey,
                    publicKey: MNE_KEY_RANDOM.publicKey.key,
                    accAddress: MNE_KEY_RANDOM.accAddress}} 
                  style={{ textDecoration: 'none' }}>
                  <Button className="btn" color="primary" size="lg" block>
                    Create Terra Wallet
                  </Button>
                </Link>
                </div>
              </CardBody>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
}

export default WalletImport;
