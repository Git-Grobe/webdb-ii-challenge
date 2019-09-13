const router = require("express").Router();

const Bears = require("./bears-model");


// GET
router.get("/", (req, res) => {
  // get the roles from the database
  Bears.find()
    .then(bears => {
      res.status(200).json(bears);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// GET by id
router.get("/:id", (req, res) => {
  // select * from roles where id = 123
  Bears.findById(req.params.id)
    .then(bear => {
      //return 404 if record is not found
      if (bear) {
        res.status(200).json(bear);
      } else {
        res.status(404).json({ message: "record is not found" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// POST
router.post("/", (req, res) => {
  // add a role to the database
  Bears.add(req.body, "id")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// PUT
router.put("/:id", (req, res) => {
  // update roles
  Bears.update(req.params.id, req.body)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: `${count} record(s) updated` });
      } else {
        res.status(404).json({ message: "record is not found" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  // remove roles (inactivate the role)
  Bears.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        const unit = count > 1 ? "records" : "record";
        res.status(200).json({ message: `${count} ${unit} deleted` });
      } else {
        res.status(404).json({ message: "Record not found" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
