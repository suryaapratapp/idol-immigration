import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import type { VideoTestimonial } from "@/data/testimonials";

type VideoTestimonialsProps = {
  videos: VideoTestimonial[];
};

export function VideoTestimonials({ videos }: VideoTestimonialsProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {videos.map((video) => {
        const hasVideo = Boolean(getYouTubeId(video.youtubeUrl));
        return (
          <article
            className="overflow-hidden rounded-[8px] border border-stone-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.07)]"
            key={`${video.title}-${video.destinationCountry}`}
          >
            {hasVideo ? (
              <a
                aria-label={`Watch ${video.title} on YouTube`}
                className="group relative block aspect-video w-full overflow-hidden bg-ivory text-left"
                href={video.youtubeUrl}
                rel="noreferrer"
                target="_blank"
              >
                <VideoThumbnail video={video} />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-white/95 px-3 py-2 text-xs font-extrabold text-ink shadow-lg">
                  Watch on YouTube
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>
            ) : (
              <div className="group relative aspect-video w-full overflow-hidden bg-ivory">
                <VideoThumbnail video={video} />
                <span className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink">
                  YouTube link pending
                </span>
              </div>
            )}
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
  );
}

function VideoThumbnail({ video }: { video: VideoTestimonial }) {
  return (
    <>
      <Image
        src={thumbnailFor(video)}
        alt={`${video.title} thumbnail`}
        fill
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
      <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink shadow-xl transition group-hover:scale-105 group-hover:bg-[#FF0000] group-hover:text-white">
        <Play className="h-6 w-6 fill-current" aria-hidden="true" />
      </span>
    </>
  );
}

function thumbnailFor(video: VideoTestimonial) {
  const id = getYouTubeId(video.youtubeUrl);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : video.thumbnailImage;
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
