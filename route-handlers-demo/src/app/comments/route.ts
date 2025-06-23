import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("query ")
    const filteredComments = query
     ? comments.filter((comment) => comment.text.includes(query))
     : comments
    return Response.json(filteredComments)
}

export async function POST(request: Request) {
  let data = await request.json()
  const id = comments[comments.length - 1].id + 1
  data = { id: id, ...data  }
  comments.push(data)
  return new Response(JSON.stringify(data),{
   headers: {"Content-Type": "application/json"},
   status: 201
 })
  


}