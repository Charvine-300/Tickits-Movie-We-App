import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { Row } from '../assets/styles/Flex'
import { H4 } from '../assets/styles'
import { font, theme } from '../assets/variables'
import Menu from '../public/menu.png'
import Close from '../public/close.png'  

const HeaderWrapper = styled.header`
  width: 100%;
  height: fit-content;
  padding: 10px 0px;
  position: fixed;
  border-bottom: 1px solid ${theme.black[600]};

  h4 {
    background: linear-gradient(to right, #BA68C8 0%, #F79240 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

`;

type Props = {}

const Header = ({}: Props) => {
  const [menuToggle, setMenuToggle] = useState(Menu);

  return (
    <>
      <HeaderWrapper>
        <Row justify='space-between' align='center' width='90%' margin='0px auto'>
          <Image src={menuToggle} width={40} height={40} alt='Tickits Menu Icon' />
          <Link href={'/homepage'} as={'/homepage'}> 
            <H4 width='fit-content'> TICKITS </H4>
          </Link>
        </Row>
      </HeaderWrapper>
    </>
  )
}

export default Header