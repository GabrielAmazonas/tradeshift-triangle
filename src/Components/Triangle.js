import styled from 'styled-components';

const Triangle = styled.div`
    width         : 0;
    height        : 0;
    border-left   : ${props => props.firstSide * 10}px solid transparent;
    border-right  : ${props => props.secondSide * 10}px solid transparent;  
    border-bottom : ${props => props.thirdSide * 10}px solid #358;
`
export default Triangle;