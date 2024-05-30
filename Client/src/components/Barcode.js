import React from 'react';

import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import "./Barcode.css"

import { Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';



function Barcode() {

  const [data, setData] = React.useState('Not Found');

  return (
    <>
      <div className="container">

        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if (result) setData(result.text)
            // else setData('not')
          }}
        />















        {data !== 'Not Found' && <Redirect to={`/scan-product/${data}`} />}
        <Link to='/'>
          <Button variant="danger" id="2"  >Cancel</Button>
        </Link>

        <p>{data}</p>
      </div>
    </>
  )
}

export default Barcode;
