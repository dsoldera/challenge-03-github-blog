import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.basePost};
  width: auto;
  height: 260px;
  padding: 32px;
  max-width: 48%;

  a {
    text-decoration: none;
  }

  span {
    color: ${({theme}) => theme.colors.baseSpan};
    font-size: ${({theme}) => theme.fontSize.textS};
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`

export const Title = styled.div`
  color: ${({theme}) => theme.colors.baseTitle};
  font-size: ${({theme}) => theme.fontSize.titleM};
  margin-bottom: 20px;
  max-width: 70%;
`

export const Body = styled.div`
  color: ${({theme}) => theme.colors.baseText};
  font-size: ${({theme}) => theme.fontSize.textM};
`
