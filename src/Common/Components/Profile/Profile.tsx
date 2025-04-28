import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Descriptions, ConfigProvider, Card, Button } from 'antd';
import '../../../App.css'

import '../../../Common/Common.css';
import Header from '../Header/Header.tsx';
import {fetchUserByEmail} from '../../../Api/UserApi.tsx';

const Profile: React.FC = () => {

    const navigate = useNavigate();
    const userString = sessionStorage.getItem("user");
    const user = userString === null ? null : JSON.parse(userString)

    type UserDetails = {
        name: string;
        email: string;
        password: string;
    };

    const [userDetails, setUserDetails] = useState<UserDetails>();

    useEffect(() => {
        fetchUserByEmail(user.email).then(
            response => {
                const item = {
                    name: response.data.name,
                    email: response.data.email,
                    password: response.data.password
                }
                setUserDetails(item);
            }
        )
    });

    const logout = () => {
        sessionStorage.removeItem("user");
        navigate("/");
    }

    function maskPassword(password) {
        if (!password || password.length < 2) {
            return password; // nothing to mask or too short to mask
          }
        
          const firstChar = password[0];
          const lastChar = password[password.length - 1];
          const maskedSection = '*'.repeat(password.length - 2);
        
          return `${firstChar}${maskedSection}${lastChar}`;
    }

    const UserInfo = [
        {
            key: 1,
            label: "Name",
            span: 4,
            children: userDetails?.name,
        },
        {
            key: 2,
            label: "Email",
            span: 4,
            children: userDetails?.email,
        },
        {
            key: 4,
            label: "Password",
            span: 4,
            children: maskPassword(userDetails?.password),
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
            <div className='logout-button-div'>
                <Button className="logout-button" type="text" onClick={logout} >Logout</Button>
            </div>
        </ConfigProvider>
    );
}

export default Profile;
