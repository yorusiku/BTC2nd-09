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
import { useState } from "react";

function fun2() {
    const [inputValue, setInputValue] = useState('');
    const onChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <>
        <input type="text" value={inputValue} onChange={onChange} />
        <p>{inputValue}</p>
      </>
    );
  }
  
  export default fun2;