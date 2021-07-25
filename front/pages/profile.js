import React from 'react';
import AppLayout from "../component/AppLayout";

import NicknameEditForm from "../component/NicknameEditForm";
import FollowerList from "../component/FollowerList";
import Head from "next/head";

const Profile = () => {
    const followerList = [{nickname:"횬쥬ㄴㄴ"},{nickname:"횬쥬ㄴ"},{nickname:"횬쥬ㅋ"}];
    const followingList = [{nickname:"뽕쥬"},{nickname:"변쥬"},{nickname:"뽕주주"}];
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowerList header="팔로잉 목록" data={followingList}/>
                <FollowerList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    );
}

export default Profile;
