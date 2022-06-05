import { Avatar, Image } from '@chakra-ui/react';
import { renderIcon } from '@download/blockies';
import React, { FC, useEffect, useRef, useState } from 'react';

import { BlockiconProps } from './types';

export const Blockicon: FC<BlockiconProps> = ({ account, height }) => {
  const [dataUrl, setDataUrl] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef && account) {
      const canvas = canvasRef.current;
      renderIcon({ seed: account.toLowerCase() }, canvas);
      if (canvas) {
        const updatedDataUrl = canvas.toDataURL();
        if (updatedDataUrl !== dataUrl) {
          setDataUrl(updatedDataUrl);
        }
      }
    }
  }, [account]);

  return account ? (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <Image
        src={dataUrl}
        height={`${height}px`}
        width={`${height}px`}
        alt="blockicon"
        borderRadius="50%"
      />
    </>
  ) : (
    <Avatar src="" height={`${height}px`} width={`${height}px`} />
  );
};
