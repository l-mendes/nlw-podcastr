import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { convertDurationToTimeString } from "./converDurationToTimeString";

type EpisodeFileProps = {
  url: string;
  type: string;
  duration: number;
}

type EpisodeProps = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  published_at: string;
  file: EpisodeFileProps;
  description: string;
}

export function episodeParser(episode: EpisodeProps) {
  return {
    id: episode.id,
    title: episode.title,
    thumbnail: episode.thumbnail,
    members: episode.members,
    publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
    duration: Number(episode.file.duration),
    durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
    description: episode.description,
    url: episode.file.url
  }
}
