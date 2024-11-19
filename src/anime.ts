const corsLink = process.env.NEXT_PUBLIC_CORS_REQUEST_LINK;
const apiLink = process.env.NEXT_PUBLIC_CONSUMET_API;

export const getAnimeData = async (animeId: string, provider: string = "zoro") => {
  const params = new URLSearchParams({ provider });
  const data = await fetch(apiLink + `/meta/anilist/data/${animeId}?${params.toString()}`)
  return await data.json();
};

export const getAnimeEpisodeData = async (animeId: string, provider: string = "zoro") => {
  const params = new URLSearchParams({ provider });
  const data = await fetch(apiLink + `/meta/anilist/episodes/${animeId}?${params.toString()}`)
  const episodeData = await data.json();
  if (Object.keys(episodeData).length === 0) {
    const data = await fetch(apiLink + `/meta/anilist/episodes/${animeId}`)
    return await data.json();
  }
  return episodeData;
}

export const getAnimeEpisodeLinks = async (animeId: string, provider: string = "zoro") => {
  const params = new URLSearchParams({ provider });
  const data = await fetch(apiLink + `/meta/anilist/watch/${animeId}?${params.toString()}`)
  return await data.json();
}

export const getAnimeSearch = async (query: string, count: number) => {
  const params = new URLSearchParams({ page: "1", perPage: count.toString() });
  const data = await fetch(apiLink + `/meta/anilist/${query}?${params.toString()}`)
  return await data.json();
}

export const getTopAnime = async (count: number) => {
  const params = new URLSearchParams({ sort: '["SCORE_DESC"]', perPage: count.toString() });
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?${params.toString()}`)
  const episodeData = await data.json();
  return episodeData;
}
export const getAnimeTrending = async (count: number) => {
  const params = new URLSearchParams({ page: "1", perPage: count.toString() });
  const data = await fetch(apiLink + `/meta/anilist/trending?${params.toString()}`)
  return await data.json();
}

export const getAnimePopular = async (count: number) => {
  const params = new URLSearchParams({ sort: '["POPULARITY_DESC"]', perPage: count.toString() });
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?${params.toString()}`)
  return await data.json();
}

export const getAnimeNew = async (count: number) => {
  const params = new URLSearchParams({ type: "ANIME", sort: '["POPULARITY_DESC"]', status: "RELEASING", perPage: count.toString() });
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?${params.toString()}`)
  return await data.json();
}

export const getAnimeGenre = async (genre: string, count: number) => {
  const params = new URLSearchParams({ sort: '["TRENDING_DESC"]', genres: `["${genre}"]`, page: "1", perPage: count.toString() });
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?${params.toString()}`)
  return await data.json();
}

export const getUpcomingAnime = async (count: number) => {
  const params = new URLSearchParams({ sort: '["POPULARITY_DESC"]', status: "NOT_YET_RELEASED", page: "1", perPage: count.toString() });
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?${params.toString()}`)
  return await data.json();
}

export const getExternalLink = async (episodeId: string) => {
  const params = new URLSearchParams({ server: "gogocdn" });
  const data = await fetch(apiLink + `/anime/gogoanime/watch/${episodeId}?${params.toString()}`)
  return await data.json();
}