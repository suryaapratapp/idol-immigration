"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { VideoTestimonial } from "@/data/testimonials";

type VideoTestimonialsProps = {
  videos: VideoTestimonial[];
};

export function VideoTestimonials({ videos }: VideoTestimonialsProps) {
  const [active, setActive] = useState<VideoTestimonial | null>(null);
  const activeEmbedUrl = useMemo(
    () => (active ? getYouTubeEmbedUrl(active.youtubeUrl) : ""),
    [active]
  );

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => {
          const hasVideo = Boolean(getYouTubeEmbedUrl(video.youtubeUrl));
          return (
            <article
              className="overflow-hidden rounded-[8px] border border-stone-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.07)]"
              key={`${video.title}-${video.destinationCountry}`}
            >
              <button
                className="group relative block aspect-video w-full overflow-hidden bg-ivory text-left disabled:cursor-not-allowed"
                disabled={!hasVideo}
                onClick={() => setActive(video)}
                type="button"
              >
                <Image
                  src={thumbnailFor(video)}
                  alt={`${video.title} thumbnail`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink shadow-xl transition group-hover:scale-105">
                  <Play className="h-6 w-6 fill-current" aria-hidden="true" />
                </span>
                {!hasVideo ? (
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink">
                    YouTube link pending
                  </span>
                ) : null}
              </button>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {video.destinationCountry} · {video.serviceType}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{video.title}</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{video.clientName}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{video.caption}</p>
              </div>
            </article>
          );
        })}
      </div>

      {active && activeEmbedUrl ? (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-ink/80 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[8px] bg-black shadow-2xl">
            <button
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-lg"
              onClick={() => setActive(null)}
              type="button"
              aria-label="Close video"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="aspect-video">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
                src={activeEmbedUrl}
                title={active.title}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function thumbnailFor(video: VideoTestimonial) {
  const id = getYouTubeId(video.youtubeUrl);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : video.thumbnailImage;
}

function getYouTubeEmbedUrl(url: string) {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : "";
}

function getYouTubeId(url: string) {
  if (!url) {
    return "";
  }

  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/
  );
  return match?.[1] ?? "";
}
