import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconCalendarStats } from '@tabler/icons';

// constant
const icons = { IconCalendarStats };

// ===========================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||=========================== //

const schedule = {
    id: 'schedule',
    title: <FormattedMessage id="Schedule" />,
    type: 'group',
    children: [
        {
            id: 'calendar',
            title: <FormattedMessage id="calendar" />,
            type: 'item',
            url: '/calendar',
            icon: icons.IconCalendarStats,
            disabled: true,
            breadcrumbs: false,
        },
        // {
        //     id: 'orgchart',
        //     title: <FormattedMessage id="Organization" />,
        //     type: 'item',
        //     url: '/org-chart',
        //     icon: icons.IconBrandChrome,
        //     breadcrumbs: false
        // },
    ]
};

export default schedule;
