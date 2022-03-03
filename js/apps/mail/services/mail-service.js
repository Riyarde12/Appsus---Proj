import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const MAIL_KEY = 'mails';
const gMails = [
    {
        id: 'e101',
        subject: ' how you doing? miss a lot, wonder whats new and how the process is progressing with you, stay tuned',
        body: utilService.makeLorem(60),
        isRead: false,
        sentAt: 155110594,
        from: 'momo@momo.com',
        name: 'Momo'
    },
    {
        id: 'e102',
        subject: 'Love you!',
        body: utilService.makeLorem(60),
        isRead: false,
        sentAt: 1551133930594,
        from: 'yarden.rishoni03@gmail.com',
        name: 'Yarden',
    },
    {
        id: 'e103',
        subject: 'Rock you!',
        body: utilService.makeLorem(60),
        isRead: false,
        sentAt: 11393094,
        from: 'yarden_rishoni@hotmail.com',
        name: 'Jorden',
    },

];

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus',
};

_createMails();

export const mailService = {
    query,
    remove,
    save,
    get,
    // addReview
};

function query() {
    return storageService.query(MAIL_KEY);
}

function save(mail) {
    if (mail.id) return storageService.put(MAIL_KEY, mail);
    else return storageService.post(MAIL_KEY, mail);
}

function get(mailId) {
    console.log('mailId', mailId);
    return storageService.get(MAIL_KEY, mailId);
    // .then(mail => {
    //     return _setNextPrevMailId(book);
    // });
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId);
}

function _setNextPrevMailId(mail) {
    console.log('mail', mail);
    return storageService.query(MAIL_KEY)
        .then(mails => {
            console.log('mails', mails);
            const mailIdx = mails.findIndex(currMail => currMail.id === mail.id);
            console.log('mail.id', mail.id);
            mail.nextMailId = (mails[mailIdx + 1]) ? mails[mailIdx + 1].id : mails[0].id;
            mail.prevMailId = (mails[mailIdx - 1]) ? mails[mailIdx - 1].id : mails[mails.length - 1].id;
            return mail;
        });
}



function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY);
    if (!mails || !mails.length) {
        mails = gMails;
        utilService.saveToStorage(MAIL_KEY, mails);
    }
    return mails;
}