import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Lâmpadas", image: "lampadas.svg" },
    { title: "Pilhas e Baterias", image: "baterias.svg" },
    { title: "Papeis e papelão", image: "papeis-papelao.svg" },
    { title: "Resíduos Electrónicos", image: "electronicos.svg" },
    { title: "Resíduos Orgánicos", image: "organico.svg" },
    { title: "Óleo de Cozinha", image: "oleo.svg" },
  ]);
}
