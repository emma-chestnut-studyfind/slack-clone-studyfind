import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectRoomId } from '../features/appSlice.js'
import ChatInput from "./ChatInput.js"

function Chat() {
  const roomId = useSelector(selectRoomId);  
    
  return (
    <ChatContainer>
        <>
            <Header>
                <HeaderLeft>
                    <h4><strong>#Room-name</strong></h4>
                    <StarBorderOutlinedIcon />
                </HeaderLeft>

                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </HeaderRight>
            </Header>

            <ChatMessages>

            </ChatMessages>

            <ChatInput 
                channelId={roomId}
            />
        </>
    </ChatContainer>
  )
}

export default Chat

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div`

`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
    }

    > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;