import { Column, Entity } from "typeorm";

@Entity("filme", { schema: "filmes" })
export class Filme {
  @Column("tinytext", { name: "title" })
  title: string;

  @Column("longtext", { name: "description" })
  description: string;

  @Column("tinytext", { name: "producer" })
  producer: string;

  @Column("mediumtext", { name: "movie_banner" })
  movie_banner: string;

  @Column("varchar", { name: "director", length: 45 })
  director: string;

  @Column("varchar", { primary: true, name: "id", length: 45 })
  id: string;
}
