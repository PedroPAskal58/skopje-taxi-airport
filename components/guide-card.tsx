import Image from 'next/image'
import Link from 'next/link'
import type { Guide } from '@/lib/guides'

export type ArticleCardProps = {
  href: string
  image: string
  alt: string
  category: string
  title: string
  meta: string
}

export function ArticleCard({ href, image, alt, category, title, meta }: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold">{category}</p>
        <p className="mt-1 text-pretty font-semibold leading-snug text-foreground group-hover:text-gold">{title}</p>
        <p className="mt-2 text-sm text-muted-foreground">{meta}</p>
      </div>
    </Link>
  )
}

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <ArticleCard
      href={`/guides/${guide.slug}`}
      image={guide.image}
      alt={guide.alt}
      category={guide.category}
      title={guide.title}
      meta={guide.facts.map((fact) => fact.value).join(' · ')}
    />
  )
}
