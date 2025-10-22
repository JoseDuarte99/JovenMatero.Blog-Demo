// import { useMutation } from '@tanstack/react-query';
// import { login } from '../api/login';

// type LoginPayload = {
//     username: string;
//     password: string;
// };

// const useLogin = () =>  {
//     return useMutation({
//         mutationFn: async ({ username, password }: LoginPayload) => {
//             const data = await login(username, password);
            
//             localStorage.setItem('accessToken', data.access);
//             localStorage.setItem('refreshToken', data.refresh);
            
//             return data;
//         },
//         onError: (error: unknown) => {
//             console.error('Error al iniciar sesión:', error);
//         },
//     });
// };

// export default useLogin;