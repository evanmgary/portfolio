import {NextResponse} from "next/server"
import dbConnect from "../../../lib/dbConnect"
import Bracket from "../../../models/Bracket"

export async function GET(request, {params}){
    await dbConnect()
    const name = params.name
    console.log("GET with name " + name)
    const bracket = await Bracket.findOne({name: name}).exec()
    return NextResponse.json(bracket, {status: 200})
}

export async function OPTIONS(request){
    return NextResponse.json({}, {status: 200}, {headers: {'Access-Control-Allow-Methods': "PUT, POST, PATCH, DELETE, GET"}})
}