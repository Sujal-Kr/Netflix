import connect from '@/utils/dbCon'
import user from '@/models/userModel'
import { NextResponse } from 'next/server'

export async function POST(req,res) {
    try{
        connect()
        const body=await req.json()
        const data=await user.create(body)
        return NextResponse.json({
            message:"Message Sent Successfully",
            status:200,
            data:data
        })
    }catch(err){
        console.error("i am from post",err.message)
        return NextResponse.json({
            message:err.message,
            status:500
        })
    }
}