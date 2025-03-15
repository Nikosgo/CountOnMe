import React from 'react';
import { Descriptions } from 'antd';

const Profile: React.FC = () => {

    const UserInfo = [
        {
            key: 1,
            label: "Name",
            children: "John Doe",
        },
        {
            key: 2,
            label: "Email",
            children: "johndoe@email.com",
        },
        {
            key: 3,
            label: "Username",
            children: "JohnDoe123",
        },
        {
            key: 4,
            label: "Password",
            children: "1amJohnD0e",
        },
    ];

    return (
        <Descriptions title="User Info" layout="vertical" items={UserInfo} />
    );
}

export default Profile;
