import React from 'react'
import { QRCodeSVG } from 'qrcode.react';

const BusinessCard = ({Values}) => {

    const {Name, Designation, Phone, Email, Website} = Values;
  return (
    <article className="BusinessCard">
        <div className="header">
          <h3>{Name}</h3>
          <div className="qr-code">
           <QRCodeSVG value={Website} size="50"/>
          </div>
        </div>
        
        <p>{Designation}</p>
        <p className='phone'>{Phone}</p>
        <p>{Email}</p>
    </article>
  )
}

export default BusinessCard