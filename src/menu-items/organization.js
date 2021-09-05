import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBasket, IconUserCheck, IconInfinity, IconHierarchy, IconUsers, IconMessages, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = { IconUserCheck, IconInfinity, IconHierarchy, IconBasket, IconUsers, IconMessages, IconMail, IconCalendar, IconNfc };

// ===========================|| organization MENU ITEMS ||=========================== //

const organization = {
    
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
            icon: icons.IconHierarchy,
            breadcrumbs: false
        },
        {
            id: 'users',
            title: <FormattedMessage id="All Users" />,
            type: 'item',
            url: '/users',
            icon: icons.IconUsers,
            breadcrumbs: false
        }
    ]
};

export default organization;
