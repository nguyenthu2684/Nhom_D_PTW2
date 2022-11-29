import request from '../../util/request';

const baseUrl = 'http://localhost:5000';

const login = async (username, password) => {
    const data = await request.post(`${baseUrl}/api/log/logFun`, {
        userName: username,
        passWord: password
    });

    console.log({
        data: data.data,
    });
}

export {
    login,
}