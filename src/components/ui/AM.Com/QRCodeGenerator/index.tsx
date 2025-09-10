import { formatImageUrl } from '@/lib/format-Image-url';
import Image from 'next/image';
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
 const urlDemoImge = 'files/1757424562341-150733702.png'
  const fullImageUrl = formatImageUrl(urlDemoImge);



  return (
    <div className={`${className ? className : "qr-code-container bg-white p-6 border-4 border-fs"}  rounded-full`}>
        <div className="qr-code-with-logo">
          {/* <QRCode {...qrCodeProps} /> */}
          <Image src={fullImageUrl} width={450} height={450} alt="qrcode" />
        </div>
    </div>
  );
};

export default QRCodeGenerator;
