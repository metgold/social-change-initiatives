import React from 'react'
import Chat from './Chat'
import HeaderChat from './HeaderChat'


import styled from 'styled-components';
import SidebarChat from './SidebarChat';
import Topbar from '../blog_topbar/Topbar';

function Comm() {
    return (
        <React.Fragment>
            <Topbar/>
            <Contain>
                
                <HeaderChat/>
                <Main>
                    <SidebarChat/>
                    <Chat/>
                </Main>
                
            </Contain>
        </React.Fragment>
    )
}

export default Comm

const Contain = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(45, 76, 160, 0.8);
    display: grid;
    grid-template-rows: 40px auto;
`

const Main = styled.div`
    background: #fff;
    display: grid;
    grid-template-columns: 300px auto;
`