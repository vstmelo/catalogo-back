import { Column, Entity } from "typeorm";

@Entity("filme", { schema: "filmes" })
export class Filmes {
  @Column("tinytext", { name: "title" })
  title: string;

  @Column("longtext", { name: "description" })
  description: string;

  @Column("varchar", { name: "producer", length: 45 })
  producer: string;


  @Column("varchar", { primary: true, name: "id", length: 45 })
  id: string;

  @Column("mediumtext", { name: "movie_banner" })
  movieBanner: string;

  @Column("varchar", { name: "director", length: 45 })
  director: string;
}
