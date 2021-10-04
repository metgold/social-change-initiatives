import React from 'react'
import styled from 'styled-components'
import  AddCircleOutlineIcon  from '@material-ui/icons/AddCircleOutline'
import { sidebarItemsData } from './data/SidebarData'
import AddIcon from '@material-ui/icons/Add'

function SidebarChat() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    DarlynDotty Response Team
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
                
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon/>
                </NewChannelContainer>
                <ChannelsList>
                    <Channel>
                        # State 1
                    </Channel>
                    <Channel>
                        # State 2
                    </Channel>
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default SidebarChat

const Container = styled.div`
    background: rgba(45, 76, 160, 0.8);
`

const WorkspaceContainer = styled.div`
    color: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`
    
const Name = styled.div``

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: #fff;
    color: rgba(45, 76, 160, 0.8);
    fill: rgba(45, 76, 160, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`

const MainChannels = styled.div`
    padding-top: 20px;

`

const MainChannelItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #fff;
    }
`

const ChannelsContainer = styled.div`
    color: rgb(188,171,188);
    margin-top: 10px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    padding-left: 19px;
    padding-right: 12px;
`

const ChannelsList = styled.div``


const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #fff;
    }
`