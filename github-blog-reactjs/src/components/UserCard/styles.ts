import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.baseProfile};
  width: 864px;
  height: 212px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 32px 40px;
  margin: 0 auto;
  margin-top: -92px;
  margin-bottom: 72px;
`
export const UserCardInfo = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
`

export const UserCardImage = styled.div`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  margin-right: 32px;
  overflow: hidden;

  img {
    width: 148px; 
    height: 148px;
  }
`
export const UserGithubLink = styled.a`
  ${({theme}) => theme.link};

  span {
    margin-right: 5px;
  }
`

export const UserCardName = styled.div`
  color: ${({theme}) => theme.colors.baseTitle};
  font-size: ${({theme}) => theme.fontSize.titleL};
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const UserCardBio = styled.div`
  color: ${({theme}) => theme.colors.baseText};
  font-size: ${({theme}) => theme.fontSize.textM};
`

export const UserCardSocial = styled.div`
  color: ${({theme}) => theme.colors.baseSubtitle};
  font-size: ${({theme}) => theme.fontSize.textM};
  align-content: flex-end;
  flex: auto;

  span {
    margin-right: 24px;
  }

  svg {
    ${({theme}) => theme.svg};
    margin-right: 8px;
  }
`
