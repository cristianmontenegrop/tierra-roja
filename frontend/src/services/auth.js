import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ?
  'http://localhost:3000/auth' :
  '/auth'

const authService = axios.create({
  baseURL,
  withCredentials: true
})

export const signupFn = userInfo => 
authService.post('/signup', userInfo)

export const loginFn = userInfo => 
authService.post('/login', userInfo)

export const editFn = (id, userInfo) => 
authService.post(`/edit/${id}`, userInfo)

export const uploadPhotoFn = (id, image) => 
authService.post(`/upload-photo/${id}`, image)

export const loggedFn = () => 
authService.get('/loggedin')

export const logoutFn = () => 
authService.get('/logout')