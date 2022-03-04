import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const NOTES_KEY = "notesDB";

const NOTE_TYPE = {
  TEXT: "note-txt",
  IMG: "note-img",
  TODO: "note-todos",
  VIDEO: "note-video",
};

const gNotes = [
  {
    id: "n101",
    type: NOTE_TYPE.TEXT,
    isPinned: true,
    info: {
      title: "Bamia recipe",
      label: "Remider",
      txt: "Ask Yaron || Google it",
      style: {
        backgroundColor: "#B5EAEA",
      },
    },
  },
  {
    id: "n106",
    type: NOTE_TYPE.TEXT,
    isPinned: true,
    info: {
      title: "Bamia recipe",
      label: "Remider",
      txt: "Ask Yaron || Google it",
      style: {
        backgroundColor: "#EDF6E5",
      },
    },
  },
  {
    id: "n105",
    type: NOTE_TYPE.TEXT,
    isPinned: true,
    info: {
      title: "Bamia recipe",
      label: "Remider",
      txt: "Ask Yaron || Google it",
      style: {
        backgroundColor: "#FFBCBC",
      },
    },
  },
  {
    id: "n108",
    type: NOTE_TYPE.TEXT,
    isPinned: true,
    info: {
      title: "Bamia recipe",
      label: "Remider",
      txt: "Ask Yaron || Google it, dsfnldknf, jfh jsndgd lskngf ldg gn lejngleg ngelng erg.",
      style: {
        backgroundColor: "#F38BA0",
      },
    },
  },
  {
    id: "n109",
    type: NOTE_TYPE.TEXT,
    isPinned: true,
    info: {
      title: "Bamia recipe",
      label: "Remider",
      txt: "Ask Yaron || Google it",
      style: {
        backgroundColor: "#E6DDC6",
      },
    },
  },
  // {
  //   id: "n102",
  //   type: NOTE_TYPE.IMG,
  //   isPinned: false,
  //   info: {
  //     title: "Bobi and Me",
  //     label: "Family",
  //     url: "http://some-img/me",
  //   },
  //   style: {
  //     backgroundColor: "#00d",
  //   },
  // },
  {
    id: "n103",
    type: NOTE_TYPE.TODO,
    isPinned: true,
    info: {
      title: "Get my stuff together",
      label: "Work",
      todos: [
        { txt: "Sprint 3", doneAt: null },
        { txt: "Final sprint", doneAt: 187111111 },
        { txt: "Get a life", doneAt: 187111111 },
      ],
      style: {
        backgroundColor: "#00d",
      },
    },
  },
  // {
  //   id: "n104",
  //   type:  NOTE_TYPE.VIDEO,
  //   isPinned: false,
  //   info: {
  //   title: "Funny-Cat",
  //     label: "Friends",
  //     url: "http://some-img/me", //??????
  //   },
  //   style: {
  //     backgroundColor: "#00d",
  //   },
  //   },
];

_createNotes();

export const notesService = {
  query,
  get,
  save,
  remove,
  getEmptyTxtNote,
};

function query() {
  return storageService.query(NOTES_KEY);
}

//puts DB on LS
function _createNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY);
  if (!notes || !notes.length) {
    notes = gNotes;
    utilService.saveToStorage(NOTES_KEY, notes);
  }
  return notes;
}

function get(bookId) {
  return storageService.get(BOOKS_KEY, bookId);
}

function save(book) {
  if (book.id) return storageService.put(BOOKS_KEY, book);
  else return storageService.post(BOOKS_KEY, book);
}

// function getEmptyNote() {
//   return {
//     id: "",
//     vendor,
//     maxSpeed,
//     prevOwners: [],
//   };
// }

function _createNote() {
  const car = getEmptyCar(vendor, maxSpeed);
  car.id = utilService.makeId();
  return car;
}

function getEmptyTxtNote() {
  return {
    id: "",
    type: NOTE_TYPE.TEXT,
    isPinned: false,
    info: {
      title: "",
      label: "",
      txt: "",
      style: {
        backgroundColor: "#B5EAEA",
      },
    },
  };
}

function remove(noteId) {
  return storageService.remove(NOTES_KEY, noteId);
}
