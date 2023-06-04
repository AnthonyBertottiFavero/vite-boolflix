import { reactive } from "vue";

export const store = reactive({
  filmList: [],
  seriesList: [],
  genres: [],
  genresTV: [],
  myKey: "1f1330532d030c12cc5138e90ad38684",
  baseURLimg: "https://image.tmdb.org/t/p/w342",
  searchStr: "",
  searchGenre: "",
  searchTv: "",
});
