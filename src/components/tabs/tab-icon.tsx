import { useEffect, useState, useCallback } from 'react';
import { COLORS } from '../../lib/colors';

interface IconProps {
  src: string;
  isActive: boolean;
}

export const Icon = ({ src, isActive }: IconProps) => {
  const [svgContent, setSvgContent] = useState<string>('');

  const fetchSvg = useCallback(async () => {
    const response = await fetch(src);
    const svgText = await response.text();
    setSvgContent(svgText);
  }, [src]);

  useEffect(() => {
    if (src) {
      fetchSvg().catch((error) => console.error('Error loading SVG:', error));
    }
  }, [src, fetchSvg]);

  const coloredSvgContent = svgContent.replace(
    /fill="[^"]*"/g,
    `fill="${isActive ? COLORS.ACTIVE : COLORS.INACTIVE}"`,
  );

  return <div dangerouslySetInnerHTML={{ __html: coloredSvgContent }} />;
};
