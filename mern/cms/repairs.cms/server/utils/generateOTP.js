import { customAlphabet } from "nanoid"

export const generateOTP = () => {
    const generateOTP = customAlphabet('1234567890', 6)
    const otp = generateOTP();
    return otp; //7878990 6767858
}