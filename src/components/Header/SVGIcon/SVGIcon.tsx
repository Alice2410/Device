import parse from 'html-react-parser';
import { Svg } from '../../../interfaces/Svg';


const SVGIcon = (icon: Svg) => {
  const svgElement = parse(icon.svg) as JSX.Element;

  return(
    svgElement
  )
}

export default SVGIcon;