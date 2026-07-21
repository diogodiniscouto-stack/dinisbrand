import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLesson, lessons } from "@/lib/starterKit";
import { LessonView } from "@/components/starter-kit/LessonView";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  return {
    title: lesson ? lesson.title : "Lesson",
    description: lesson?.summary,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();
  return <LessonView slug={slug} />;
}
