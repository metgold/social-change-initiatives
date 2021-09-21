import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import  HelpOutlineIcon  from '@material-ui/icons/HelpOutline'

function HeaderChat() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
             <UserContainer>
                <Name>
                    Niyi
                </Name>
                <UserImage>
                    <img src="/images/img-39.jpg" alt="" />
                </UserImage>
             </UserContainer> 
        </Container>
    )
}

export default HeaderChat

const Container = styled.div`
    background: rgba(45, 76, 160, 3.9);
    padding-top: 3px;
    padding-bottom: 3px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div`
    display: flex;
    margin-left: 16px;
    margin-right: 16px;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`

const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;

    input {
        background: transparent;
        width: 100%;
        border: none;
        padding-left: 8px;
        padding-right:8px;
        color: #fff;
        padding-top: 4px;
        padding-bottom: 4px;
    }

    input:focus {
        outline: none;
    }
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`