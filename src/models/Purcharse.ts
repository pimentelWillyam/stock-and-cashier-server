import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Purcharse {

    @PrimaryGeneratedColumn("uuid")
    id: number | undefined

    @Column("string")
    name: string | undefined

    @Column("string")
    brand: string | undefined

    @Column("string")
    class: number | undefined

    @Column("float")
    price: number | undefined
}
