import React from 'react';
// import QRCode from 'qrcode.react';

interface QRCodeimge{
  src: any;
  height: number;
  width: number;
  excavate: boolean;
}

interface qrCodeProps
{
  value: any;
  size: number;
  level: string;
  bgColor: string;
  fgColor: string;
  imageSettings:QRCodeimge;
};

const QRCodeGenerator = ({className , qrCodeProps}:{className:string , qrCodeProps:qrCodeProps}) => {




  return (
    <div className={`${className ? className : "qr-code-container bg-white p-6 border-4 border-fs"}  rounded-full`}>
        <div className="qr-code-with-logo">
          {/* <QRCode {...qrCodeProps} /> */}
        </div>
    </div>
  );
};

export default QRCodeGenerator;
