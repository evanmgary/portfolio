import {NextResponse} from "next/server"
import dbConnect from "../../lib/dbConnect"
import Bracket from "../../models/Bracket"

export async function POST(request){
    await dbConnect()

    const {name, user , state} = await request.json()
    console.log("POST with name " + name)
    if (state.every((item) => item.team)){
        try{
            const saveBracket = await Bracket.create({name, user, state})
            //const saveBracket = await bracket.save()
            return NextResponse.json(saveBracket, {status: 201})
        }
        catch(e){
            return NextResponse.json({error: "Could not add bracket"}, {status: 500})
        }
    }
    else{
        return NextResponse.json({error: "Submitted bracket is not complete"}, {status: 500})
    }
}

export async function PUT(request){
    await dbConnect()

    const {name, user , state} = await request.json()
    console.log("PUT with name " + name)
    if (state.every((item) => item.team)){
        try{
            const saveBracket = await Bracket.findOneAndReplace({name: name}, {name: name, user: user, state: state},{returnNewDocument: true})
            return NextResponse.json(saveBracket, {status: 200})
        }
        catch(e){
            console.log(e)
            return NextResponse.json({error: "Could not change bracket"}, {status: 500})
        }
    }
    else{
        return NextResponse.json({error: "Submitted bracket is not complete"}, {status: 500})
    }
}

export async function OPTIONS(request){
    return NextResponse.json({}, {status: 200}, {headers: {'Access-Control-Allow-Methods': "PUT, POST, PATCH, DELETE, GET"}})
}