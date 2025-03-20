import React from 'react';
import { Descriptions, ConfigProvider, Card } from 'antd';
import '../../../App.css'

import Header from '../Header/Header.tsx';

const Profile: React.FC = () => {

    const UserInfo = [
        {
            key: 1,
            label: "Name",
            span: 4,
            children: "John Doe",
        },
        {
            key: 2,
            label: "Email",
            span: 4,
            children: "johndoe@email.com",
        },
        {
            key: 3,
            label: "Username",
            span: 4,
            children: "JohnDoe123",
        },
        {
            key: 4,
            label: "Password",
            span: 4,
            children: "1amJohnD0e",
        },
    ];

    const theme = {
        token: {
            fontFamily:'Arial',
            colorTextBase:'#022b3a',
        },
        components: {
            Descriptions: {
                contentColor: '#022b3a'
            }
        }
    };

    const descriptionStyles = {
        root: {
            padding: 20,
        },
        header: {
            display: 'none'
        },
        label: {
            width: 150,
            fontSize: 18,
            backgroundColor: '#e9ebf0',
            color: '#022b3a',
            fontWeight: '600',
            letterSpacing: 1,
        },
        content: {
            letterSpacing: 1,
            color: '#022b3a',
        }
    }

    const cardStyles = {
        header: {
            borderColor: '#022b3a',
            backgroundColor: '#022b3a',
            color: '#e9ebf0',
        },
        title: {
            fontWeight: '600',
            fontSize: 30,
            paddingLeft: 10,
            paddingTop: 15,
            paddingBottom: 15,
        },
        body: {
            padding: 5
        }
    }

    return (
        <ConfigProvider theme={theme}>
            <Header/>
            <Card 
                title="Profile" 
                size='default'
                styles={cardStyles}
                style={{
                    margin: 50,
                    borderColor: '#022b3a',
                    borderRadius: 10
                }}
            >
                <Descriptions 
                    items={UserInfo} 
                    bordered
                    styles={descriptionStyles}
                />  
            </Card>
            
        </ConfigProvider>
        
    );
}

export default Profile;
