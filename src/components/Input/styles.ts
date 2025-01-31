import styled from 'styled-components'

export const Container = styled.div`
  input {
    background-color: ${({theme}) => theme.colors.baseInput};
    border: 1px ${({theme}) => theme.colors.baseBorder};
    border-style: solid;
    border-radius: 6px;
    width: 864px;
    height: 50px;
    padding: 12px 16px;
    margin-top: 12px;
    font-size: ${({theme}) => theme.fontSize.textM};
    color: ${({theme}) => theme.colors.baseText};

    ::placeholder {
      color: ${({theme}) => theme.colors.baseLabel};
    }
  }
`
