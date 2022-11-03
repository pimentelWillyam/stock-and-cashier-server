import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number | undefined

    @Column("string")
    login: string | undefined

    @Column("string")
    password: string | undefined

    @Column("string")
    type: number | undefined

    @Column("string")
    name: number | undefined

}
