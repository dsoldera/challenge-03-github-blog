import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.basePost};
  width: 416px;
  height: 260px;
  padding: 32px;

  a {
    text-decoration: none;
  }
`

export const Title = styled.div`
  color: ${({theme}) => theme.colors.baseTitle};
  font-size: ${({theme}) => theme.fontSize.titleM};
  margin-bottom: 20px;
`

export const Body = styled.div`
  color: ${({theme}) => theme.colors.baseText};
  font-size: ${({theme}) => theme.fontSize.textM};
`
