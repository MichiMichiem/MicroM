import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBasket, IconUserCheck, IconUsers, IconMessages, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = { IconUserCheck, IconBasket, IconUsers, IconMessages, IconMail, IconCalendar, IconNfc };

// ===========================|| APPLICATION MENU ITEMS ||=========================== //

const application = {
    
    id: 'organization',
    title: <FormattedMessage id="Organization" />,
    type: 'group',
    children: 
    [
        {
            id: 'orgchart',
            title: <FormattedMessage id="Chart" />,
            type: 'item',
            url: '/org-chart',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'users',
            title: <FormattedMessage id="All Users" />,
            type: 'item',
            url: '/users',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'sample-page',
            title: <FormattedMessage id="Sample" />,
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        }
    ]
};

export default application;
