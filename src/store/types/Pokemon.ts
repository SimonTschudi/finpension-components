export interface Pokemon {
    name: string;
    url: string;
    species: {
        name: string;
        url: string;
    };
    sprites: {
        front_shiny: string;
    };
}
