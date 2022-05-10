import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
} from "reactstrap";

import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <Row>
      <Col>
        <Card style={{ width: '55rem' }}>
          {/* <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Wallet 개발중
          </CardTitle> */}

          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            About Admin Pro React
          </CardTitle>
          <CardBody>
            <Row justify-content>
              <Col lg="8">
                {/* <h3 className="mt-4">Terra Wallet</h3> */}
                <h5 className=" mb-4">
                  How to use Terra Wallet How to use Terra Wallet How to use Terra Wallet How to use Terra Wallet How to use Terra Wallet...
                </h5>
                </Col>
                </Row>
              <div className="button-group">
            

              <Link to="/walletcreate" style={{ textDecoration: 'none' }}>
                <Button className="btn" color="primary" size="lg" block>
                  Create New Wallet
                </Button>
                </Link>
                <Link to="/walletimport" style={{ textDecoration: 'none' }}>
                <Button className="btn" color="secondary" size="lg" block>
                  Import Existing Key
                </Button>
                </Link>
              </div>

 
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
