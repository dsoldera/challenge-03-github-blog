import styled from 'styled-components'

export const Post = styled.div`
  background-color: ${({theme}) => theme.colors.baseProfile};
  width: 864px;
  height: 168px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
  margin: 0 auto;
  margin-top: -72px;
  margin-bottom: 40px;
`

export const Title = styled.div`
  color: ${({theme}) => theme.colors.baseTitle};
  font-size: ${({theme}) => theme.fontSize.titleL};
  margin-top: 20px;
  margin-bottom: 15px;
`

export const BoxLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  svg {
    margin-left: 8px;
    margin-right: 8px;
  }
`

export const Link = styled.a`
  ${({theme}) => theme.link};
  text-transform: uppercase;
  cursor: pointer;
`

export const SocialLinks = styled.div`
  span {
    margin-right: 24px;
  }

  svg {
    ${({theme}) => theme.svg};
    margin-right: 8px;
  }
`

