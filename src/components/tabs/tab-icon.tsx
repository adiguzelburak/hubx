import { useState } from 'react';
import { useEffect } from 'react';
import { COLORS } from '../../lib/colors';

interface IconProps {
  src: string;
  isActive: boolean;
}

export const Icon = ({ src, isActive }: IconProps) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(src);
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error('Error loading SVG:', error);
      }
    };

    if (src) {
      void fetchSvg();
    }
  }, [src]);

  const coloredSvgContent = svgContent.replace(
    /fill="[^"]*"/g,
    `fill="${isActive ? COLORS.ACTIVE : COLORS.INACTIVE}"`,
  );

  return <div dangerouslySetInnerHTML={{ __html: coloredSvgContent }} />;
};
