import { MigrationInterface, QueryRunner } from "typeorm";

export class Catalogo1664454267648 implements MigrationInterface {
    name = 'Catalogo1664454267648'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`filme\` (\`title\` tinytext NOT NULL, \`description\` longtext NOT NULL, \`producer\` varchar(45) NOT NULL, \`id\` varchar(45) NOT NULL, \`movie_banner\` mediumtext NOT NULL, \`director\` varchar(45) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`filme\``);
    }

}
