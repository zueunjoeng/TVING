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
    @media (max-width:768px){
    height: auto;
}
`;

export const Containdiv =styled.div`
  max-width: 1280px;

@media (max-width:768px){
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
    @media (max-width:768px){
    justify-content: center !important;
    }
`;

export const Imgdiv = styled.img`
    width: 100%;
    height: 27rem;
    @media (max-width:768px){
        width: 79%;
        height: 21rem;
    }
    @media (max-width:576px){
    width: 50%;
    height: 14rem;
}
@media (max-width:320px){
    width: 43%;
    height: 11rem;
}

`;