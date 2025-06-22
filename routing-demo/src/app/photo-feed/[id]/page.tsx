import Image from "next/image"
import wondersImages from "../wonders"

export default async function PhotoPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const photo = wondersImages.find((p) => p.id === id)
    if (!photo) {
        throw new Error(`Photo with id ${id} not found`)
    }

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
                <div>
                    <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
                </div>
                <Image
                    alt={photo.name}
                    src={photo.src}
                    className="w-full object-cover aspect-square"
                />

                <div className="bg-white p-4">
                    <h2 className="text-xl font-semibold">{photo.name}</h2>
                    <h3>{photo.photographer}</h3>
                    <h3>{photo.location}</h3>
                </div>
            </div>
        </div>
    )
}