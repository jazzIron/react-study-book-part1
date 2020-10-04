import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../components/User';
import { Preloader } from '../lib/PreloadContext';
import { getUser } from '../modules/users';

const UserContainer = ({id}) => {
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();

    usePreloader(() => dispatch(getUser(id))); // 서버 사이드 렌더링을 할 때 API 호출하기 
    
    useEffect(() => {
        if (user && user.id === parseInt(id, 10)) return; // 사용자가 존재하고 일치하면 요청 하지 않음
        dispatch(getUser(id));
    }, [dispatch, id, user]); //id가 변경된 경우 새로 요청이 필요함 

    // 컨테이너 유효성 검사 후 return null 해야하는 경우 Preloader 변환
    
    if (!user) return null;
    return <User user={user}/>;
};

export default UserContainer;