const knex = require("knex");

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "./data/lambda.db3"
  },
  useNullAsDefault: true //,
  //debug: true
};

const db = knex(knexConfig);

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

// GET
function find() {
  return db("bears");
}

// GET by id
function findById(id) {
  return db("bears")
    .where({ id })
    .first();
}

// POST
function add(bear) {
  return db("bears")
    .insert(bear);
}

// PUT
function update(id, changes) {
  return db("bears")
    .where({ id })
    .update(changes);
}

// DELETE
function remove(id) {
  return db("bears")
    .where({ id })
    .del();
}
