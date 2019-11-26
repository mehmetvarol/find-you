import styled from 'styled-components'
import media from '../../util/media'

export const HeaderWrap = styled.div`
  width: 100%;
  height: 100px;
  font-family: Avenir;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.sm`
    flex-direction:column;
    justify-content: flex-start;
    height: 200px;
  `}
`
export const Logo = styled.a``

export const LogoImage = styled.img`
  width: 146px;
  height: 46px;
  background-repeat: no-repeat;
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-right: 70px;
    text-decoration: none;
    color: #000;

    ${media.sm`
      margin-right: 0;
      margin: 10px 0;
  `}
  }
  ${media.sm`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  `}
`
