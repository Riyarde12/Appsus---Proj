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
  {
    id: "n102",
    type: NOTE_TYPE.IMG,
    isPinned: false,
    info: {
      title: "Kermit and Me",
      label: "Family",
      url: "../../../../img/kermit.jpeg",
    },
    style: {
      backgroundColor: "#00d",
    },
  },
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
  {
    id: "n104",
    type:  NOTE_TYPE.VIDEO,
    isPinned: false,
    info: {
    title: "Guilty Dogs",
      label: "Friends",
      url: "https://www.videvo.net/video/tropical-fish-banner-fish-on-coral-reef/452225/",
      // url: "https://rr3---sn-4g5e6nsr.googlevideo.com/videoplayback?expire=1646431125&ei=NTciYv-mOoH6kgaK26PACg&ip=192.186.185.1&id=o-AM35AaX3KuskrVe4FGTBGsbBr549tN-8GErLSNqYO7kq&itag=17&source=youtube&requiressl=yes&vprv=1&mime=video%2F3gpp&gir=yes&clen=1616812&dur=166.765&lmt=1575002951007538&fexp=24001373,24007246&c=ANDROID&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANOurFODnoRELHl6nuMmez8Ah9SclQQQVWQOM3_cw1m2AiEA7TeHqlEaKwvMpyUgrP7320PnOzcOYVKg9WCqpb1xS9s%3D&title=Otis%20Redding%20-%20(Sittin%27%20On)%20The%20Dock%20Of%20The%20Bay%20(Official%20Music%20Video)&rm=sn-a5me7k7s&req_id=21d166245d71a3ee&redirect_counter=2&cm2rm=sn-oxu8pnpvo-nq8e7s&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=sA&mip=2a02:14c:631e:ec00:d9da:1bd9:3a2d:fd7b&mm=29&mn=sn-4g5e6nsr&ms=rdu&mt=1646409417&mv=m&mvi=3&pl=46&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAM-bYIu_yF3qT81bDOaKq6mGiGBt8g11L6K-fHseeweJAiEA7XYGGhr_AcGlJrM2ESY8k5pWWV3sl_ocN7nppWLc1I4%3D",
      // url: "https://www.youtube.com/watch?v=_kLdO3EsECs",
    },
    style: {
      backgroundColor: "#00d",
    },
    },
    {
      id: "n102",
      type: NOTE_TYPE.IMG,
      isPinned: false,
      info: {
        title: "Bobi and Me",
        label: "Family",
        url: "../../../../img/Elmodal.jpg",
      },
      style: {
        backgroundColor: "#00d",
      },
    },
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

function get(notId) {
  return storageService.get(NOTES_KEY, notId);
}

function save(note) {
  if (note.id) return storageService.put(NOTES_KEY, note);
  else return storageService.post(NOTES_KEY, note);
}

// function getEmptyNote() {
//   return {
//     id: "",
//     vendor,
//     maxSpeed,
//     prevOwners: [],
//   };
// }

// function _createNote() {
//   const car = getEmptyCar(vendor, maxSpeed);
//   car.id = utilService.makeId();
//   return car;
// }

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
        backgroundColor: "",
      },
    },
  };
}

function remove(noteId) {
  return storageService.remove(NOTES_KEY, noteId);
}
