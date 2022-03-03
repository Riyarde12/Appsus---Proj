import appAbout from './pages/app-about.cmp.js';
import appHome from './pages/app-home.cmp.js';
import notesApp from './apps/notes/pages/notes-app.cmp.js';
import mailApp from './apps/mail/pages/mail-app.cmp.js';
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
        component: notesApp,
    },
    // {
    //     path: '/notes/:noteId',
    //     component: noteDetails,
    // },
    {
        path: '/mail',
        component: mailApp,
        // children: [
        //     {
        //         path: 'sent',
        //         component: mailSent,
        //     }, {
        //         path: 'trash',
        //         component: mailTrash,
        //     }, {
        //         path: 'draft',
        //         component: mailDraft,
        //     },
        // ]

    },
    {
        path: '/mail/:mailId',
        component: mailDetails,
    },

];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});