import { permanentRedirect } from "next/navigation";

type BlogRedirectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogRedirectPage({ params }: BlogRedirectPageProps) {
  const { slug } = await params;
  permanentRedirect(`/blogs/${slug}`);
}
