const util = require("util");
const events = require("events");

const db_data = [
  { id: 1, name: "James Alan Hetfield", bday: "03-08-1963" },
  { id: 2, name: "Kirk Lee Hammett", bday: "18-11-1962" },
  { id: 3, name: "Roberto Trujillo", bday: "23-10-1964" },
  { id: 4, name: "Lars Ulrich", bday: "26-12-1963" },
];

function DB() {
  this.get = () => {
    return db_data;
  };
  this.post = (r) => {
    const index = db_data.findIndex((n) => n.id == r.id);
    if (index == -1) {
      db_data.push(r);
    }
  };
  this.delete = (r) => {
    const index = db_data.findIndex((n) => n.id == r);
    if (index != -1) {
      db_data.splice(index, 1);
    }
    return db_data;
  };
  this.update = (r) => {
    const index = db_data.findIndex((n) => n.id == r.id);
    if (index != -1) {
      db_data.splice(index, 1, r);
    }
    return db_data;
  };
}

util.inherits(DB, events.EventEmitter);

exports.DB = DB;
