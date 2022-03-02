import appAbout from './pages/app-about.cmp.js';
import appHome from './pages/app-home.cmp.js';
import notesIndex from './apps/notes/pages/notes-index.cmp.js';
import mailIndex from './apps/mail/pages/mail-index.cmp.js';
import noteDetails from './apps/notes/pages/note-details.cmp.js';
import mailDetails from './apps/mail/pages/mail-details.cmp.js';

const routes = [
    {
        path: '/',
        component: appHome,
    },
    {
        path: '/about',
        component: appAbout,
    },
    {
        path: '/notes',
        component: notesIndex,
    },
    // {
    //     path: '/notes/:noteId',
    //     component: noteDetails,
    // },
    {
        path: '/mail',
        component: mailIndex,
    },
    // {
    //     path: '/mail/:mailId',
    //     component: mailDetails,
    // },

];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});