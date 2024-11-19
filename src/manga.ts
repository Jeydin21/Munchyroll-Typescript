const corsLink = process.env.NEXT_PUBLIC_CORS_REQUEST_LINK;
const apiLink = process.env.NEXT_PUBLIC_CONSUMET_API;

export const getMangaDetails = async (mangaId: number) => {
  const params = new URLSearchParams({ provider: "mangadex" });
  const data = await fetch(apiLink + `/meta/anilist-manga/info/${mangaId}?${params.toString()}`)
  return await data.json();
};

export const getMangaPages = async (chapterId: string) => {
  const params = new URLSearchParams({ chapterId: chapterId, provider: "mangadex" });
  const data = await fetch(apiLink + `/meta/anilist-manga/read?${params.toString()}`)
  return await data.json();
}

export const getMangaSearch = async (query: string, count: number) => {
  const params = new URLSearchParams({ page: "1", perPage: count.toString() });
  const data = await fetch(apiLink + `/meta/anilist-manga/${query}?${params.toString()}`)
  return await data.json();
}

export const getMangaNew = async (count: number) => {
  const params = new URLSearchParams({ type: "MANGA", sort: '["POPULARITY_DESC"]', status: "RELEASING", perPage: count.toString() });
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?${params.toString()}`)
  return await data.json();
}

export const getMangaTrending = async (count: number) => {
  const params = new URLSearchParams({ type: "MANGA", sort: '["TRENDING_DESC"]', perPage: count.toString() });
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?${params.toString()}`)
  return await data.json();
}

export const getMangaPopular = async (count: number) => {
  const params = new URLSearchParams({ type: "MANGA", sort: '["POPULARITY_DESC"]', perPage: count.toString() });
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?${params.toString()}`)
  return await data.json();
}

export const getMangaTop = async (count: number) => {
  const params = new URLSearchParams({ type: "MANGA", sort: '["SCORE_DESC"]', perPage: count.toString() });
  const data = await fetch(apiLink + `/meta/anilist/advanced-search?${params.toString()}`)
  return await data.json();
}