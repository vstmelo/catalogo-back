export default interface ISaveLocal {
  filmes: [
    {
      title: any;
      producer: any;
      director: any;
      movie_banner: any;
      description: any;
      id: string;
    },
  ];
}

export interface IProps {
  title: string;
  id: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
}
