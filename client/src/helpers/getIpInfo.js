"use client"
// https://test-ip-rose.vercel.app/
import axios from "axios"
export const getIpInfo = () => {
    return axios.get('https://test-ip-rose.vercel.app/')
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error(error)
        })
}