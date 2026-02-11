import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClientNavbar } from "@/components/web/client-navbar";
import { Footer } from "@/components/web/footer";
import { CaseStudyDetail } from "@/components/web/case-study-detail";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/projects-data";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} - Case Study`,
    description: caseStudy.description,
    keywords: caseStudy.technologies,
    openGraph: {
      title: `${caseStudy.title} - Case Study`,
      description: caseStudy.description,
      url: `/projects/${caseStudy.slug}`,
      type: "article",
      images: [
        {
          url: caseStudy.images.hero,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col">
      <ClientNavbar />
      <main className="flex-1 mx-auto w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16 lg:py-20">
        <CaseStudyDetail caseStudy={caseStudy} />
      </main>
      <Footer />
    </div>
  );
}
