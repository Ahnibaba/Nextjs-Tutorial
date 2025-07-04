"use client"
import Link from "next/link";
import { use } from "react";

type Props = {
  params: Promise<{ articleId: string }>
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>
}

export default function NewsArticle({ params, searchParams }: Props) {
    const { articleId } = use(params)
    const { lang = "en" } = use(searchParams)
  return (
    <div>
        <h1>News article {articleId}</h1>
        <p>Reading in {lang}</p>

        <div>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </div>
    </div>
  )  
}