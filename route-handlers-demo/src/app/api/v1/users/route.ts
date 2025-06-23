import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

type UserV1 = {
    id: string;
    email: string;
    fullName: string;
    createdAt: string;
};

// If you actually want to return the users data:
export async function GET(request: NextRequest) {

    if(request.nextUrl.pathname === "/api/v1/users") {
        return NextResponse.redirect(new URL("/api/v2/users", request.nextUrl))
    }
    const users: UserV1[] = [
        {
            id: "550e8400-e29b-41d4-a716-446655440000",
            email: "john@example.com",
            fullName: "John Smith",
            createdAt: "2024-01-15T08:30:00Z"  
        },
        {
            id: "7c9e6679-742540dc-944b-c07fc1f90ac7",
            email: "jane@example.com",
            fullName: "Jane Wilson",
            createdAt: "2024-02-15T08:30:00Z"  
        },
    ];
    return NextResponse.json(users);
}


