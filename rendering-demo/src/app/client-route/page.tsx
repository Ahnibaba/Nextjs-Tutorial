"use client"

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../globals.css"
import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';

export default function ClientRoutePage() {
   const result = clientSideFunction()
   const { colors, name, func } = useTheme()
   return (
      <>
        <h1>{name}</h1>
        <p>{func(name)}</p>
        <h1 style={{color: colors.secondary}}>Client router page</h1>
        <p>{result}</p>
      </>
   )
} 