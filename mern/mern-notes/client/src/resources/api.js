export const BASE_URL = "http://localhost:5000/api/v1"

export const LOGIN_URL          = BASE_URL + "/user/login"
export const SIGNUP_URL         = BASE_URL + "/user/register"
// export const VERIFY          = BASE_URL + "/user/verify"
export const SEND_OTP_URL       = BASE_URL + "/user/send-otp"
export const VERIFY_OTP_URL     = BASE_URL + "/user/verify-otp"
export const RESET_PASSWORD_URL = BASE_URL + "/user/reset-password"

export const NOTES_API          = BASE_URL + "/notes"
export const CREATE_NOTE        = BASE_URL + "/notes/create"
export const DELETE_NOTE        = BASE_URL + "/notes/delete"
export const DETAIL_NOTE        = BASE_URL + "/notes"
export const UPDATE_NOTE        = BASE_URL + "/notes/update"