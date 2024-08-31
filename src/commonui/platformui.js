import styled from 'styled-components';

export const Platdiv = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 430px;
    background-color: transparent;
    margin-bottom: 30px;
`;

export const Containdiv =styled.div`
  /* width:calc(100vw - 30px); */
  max-width: 1280px;

@media (max-width:576px){
    width: auto;
}
`;

export const Slidediv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: #fff;
    background:  transparent;
    width: 100%;
`;

export const Imgdiv = styled.img`
    width: 100%;
    height: 27rem;
`;