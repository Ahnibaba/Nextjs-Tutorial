import { comments } from "../data";

export async function GET(
    _request: Request, // Marked as unused with underscore
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        // Validate ID is numeric
        const commentId = parseInt(id);
        if (isNaN(commentId)) {
            return new Response("Invalid comment ID", {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Find comment
        const comment = comments.find(c => c.id === commentId);

        // Handle not found case
        if (!comment) {
            return new Response("Comment not found", {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Return found comment
        return new Response(JSON.stringify(comment), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error: unknown) { // Now using the error variable
        console.error("Error in GET /comments/[id]:", error);
        return new Response("Internal server error", {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const { text } = await request.json();
        const index = comments.findIndex((comment) => comment.id === parseInt(id));
        
        if (index === -1) {
            return new Response("Comment not found", { status: 404 });
        }

        comments[index].text = text;
        return Response.json(comments[index]);
    } catch (error: unknown) {
        console.error("Error in PATCH /comments/[id]:", error);
        return new Response("Invalid request", { status: 400 });
    }
}

export async function DELETE(
    _request: Request, // Marked as unused with underscore
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const index = comments.findIndex((comment) => comment.id === parseInt(id));
        
        if (index === -1) {
            return new Response("Comment not found", { status: 404 });
        }

        const deletedComment = comments[index];
        comments.splice(index, 1);
        return Response.json(deletedComment);
    } catch (error: unknown) {
        console.error("Error in DELETE /comments/[id]:", error);
        return new Response("Internal server error", { status: 500 });
    }
}