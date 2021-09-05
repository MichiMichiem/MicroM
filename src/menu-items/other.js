import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBasket, IconUserCheck, IconInfinity, IconHierarchy, IconUsers, IconMessages, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = { IconUserCheck, IconInfinity, IconHierarchy, IconBasket, IconUsers, IconMessages, IconMail, IconCalendar, IconNfc };

// ===========================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||=========================== //

const other = {
    id: 'devonly',
    type: 'group',
    title: <FormattedMessage id="Development" />,
    children: [
        // {
        //     id: 'sample-page',
        //     title: <FormattedMessage id="sample-page" />,
        //     type: 'item',
        //     url: '/sample-page',
        //     icon: icons.IconBrandChrome,
        //     breadcrumbs: false
        // },
        {
            id: 'roadmap',
            title: <FormattedMessage id="Roadmap" />,
            type: 'item',
            url: '/roadmap',
            icon: icons.IconInfinity,
            breadcrumbs: false
        }
    ]
};

export default other;
