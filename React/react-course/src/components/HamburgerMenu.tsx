import React, { FC, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Hamburger from '../assests/icon/menu_24px.png';
import { useAppSelector } from "../store/store";

interface AvatarProps {
    imageUrl: string;
}

export const Menu: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const userData = useAppSelector(state => state.user);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div>
                <ContainerIcon>
                    <HamburgerImg onClick={toggleMenu} src={Hamburger} />
                </ContainerIcon>
                <Container ref={menuRef} className={isOpen ? 'open' : ''}>
                    <ContainerAvatar imageUrl={userData?.imageUrl || 'grey'} />
                    <p>Login: {userData.login}</p>
                </Container>
            </div>
        </>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: -100%;
  height: 100vh;
  width: 250px;
  padding: 20px;
  transition: right 0.3s ease-in-out;
  z-index: 999;

  &.open {
    right: 0;
  }
`;

const HamburgerImg = styled.img`
  width: 25px;
  height: 25px;
`;

const ContainerIcon = styled.div`
  display: none;

  @media ${(props) => props.theme.tablet} {
    display: block;
    cursor: pointer;
  }
`;

const ContainerAvatar = styled.div<AvatarProps>`
  width: 100px;
  height: 100px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;