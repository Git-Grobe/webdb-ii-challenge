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
  return db("zoos");
}

// GET by id
function findById(id) {
  return db("zoos")
    .where({ id })
    .first();
}

// POST
function add(zoo) {
  return db("zoos")
    .insert(zoo);
}

// PUT
function update(id, changes) {
  return db("zoos")
    .where({ id })
    .update(changes);
}

// DELETE
function remove(id) {
  return db("zoos")
    .where({ id })
    .del();
}
