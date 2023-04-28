import styled from '@emotion/styled'

export const UlCenter = styled.ul`
display:flex;
flex-direction:column;
align-items: center;
list-style:none ;
`
export const Color = styled.span`
  height: 25px;
  width: 25px;
  
  border-radius: 50%;
  display: inline-block;
  
  background-color: ${props => {
    switch(props.status){
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'gray';
    }
  }}
`;