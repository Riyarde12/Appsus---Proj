import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const NOTES_KEY = "notesDB";

const gNotes = [
  {
    id: "n101",
    type: "note-txt",
    isPinned: true,
    info: {
      title: "Bamia recipe",
      txt: "Ask Yaron || Google it",
    },
    style: {
      backgroundColor: "#00d",
    },
  },
  {
    id: "n102",
    type: "note-img",
    isPinned: false,
    info: {
      label: "Family",
      url: "http://some-img/me",
      title: "Bobi and Me",
    },
    style: {
      backgroundColor: "#00d",
    },
  },
  {
    id: "n103",
    type: "note-todos",
    isPinned: true,
    info: {
      title: "Get my stuff together",
      label: "Work",
      todos: [
        { txt: "Driving liscence", doneAt: null },
        { txt: "Coding power", doneAt: 187111111 },
      ],
    },
    style: {
      backgroundColor: "#00d",
    },
  },
  {
    id: "n104",
    type: "note-video",
    isPinned: false,
    info: {
      label: "Friends",
      url: "http://some-img/me", //??????
      title: "Funny-Cat",
    },
    style: {
      backgroundColor: "#00d",
    },
  },
];

_createNotes();

export const notesService = {
  query,
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
