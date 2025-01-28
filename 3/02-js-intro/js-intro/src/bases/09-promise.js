import byDefault, { other } from "../data/heroes";

export const getHeroById = (id) => {
    return byDefault.find(({ id: idF }) => idF === id);
}