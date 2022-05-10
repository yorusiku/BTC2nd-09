import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <Row>
      <Col>
        <Card style={{ width: '55rem' }}>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Wallet Import 개발중
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleText">Mnemonic Code</Label>
                <Input id="exampleText" name="text" type="textarea" 
                placeholder="니모닉 코드 문구를 입력하세요. 각 단어 사이는 띄어쓰기로 구분합니다."
                />
              </FormGroup>
              <Link to="/walletbalancetransfer" style={{ textDecoration: 'none' }}> 
                <Button className="btn" color="primary" size="lg" block>
                  Access Terra Wallet
                </Button>
              </Link>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
