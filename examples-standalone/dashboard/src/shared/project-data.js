export const projects = [
    { id: 1, name: 'Meridian migration', description: 'Move customer workspaces to the Meridian experience.', status: 'On track', progress: 76, deadline: 'Sep 18', lead: 'Maya Chen', team: 6, priority: 'High' },
    { id: 2, name: 'Mobile release 4.2', description: 'Ship offline project boards and notification controls.', status: 'At risk', progress: 48, deadline: 'Sep 12', lead: 'Noah Patel', team: 8, priority: 'Critical' },
    { id: 3, name: 'Design system adoption', description: 'Publish reusable dashboard patterns for product teams.', status: 'On track', progress: 64, deadline: 'Oct 02', lead: 'Elena Rossi', team: 5, priority: 'Medium' },
    { id: 4, name: 'Analytics foundation', description: 'Standardize reporting metrics and delivery health signals.', status: 'On hold', progress: 28, deadline: 'Oct 18', lead: 'Jordan Kim', team: 4, priority: 'Low' }
];

export const tasks = [
    { id: 101, title: 'Review mobile navigation prototypes', project: 'Mobile release 4.2', status: 'In progress', priority: 'High', assignee: 'Elena Rossi', due: 'Today' },
    { id: 102, title: 'Validate migration checklist', project: 'Meridian migration', status: 'In review', priority: 'Critical', assignee: 'Maya Chen', due: 'Aug 28' },
    { id: 103, title: 'Document dashboard metric definitions', project: 'Analytics foundation', status: 'To do', priority: 'Medium', assignee: 'Jordan Kim', due: 'Aug 30' },
    { id: 104, title: 'Prepare accessibility acceptance criteria', project: 'Design system adoption', status: 'Done', priority: 'High', assignee: 'Noah Patel', due: 'Aug 24' }
];

export const members = [
    { name: 'Maya Chen', role: 'Product manager', workload: 82, availability: 'Available' },
    { name: 'Noah Patel', role: 'Engineering lead', workload: 96, availability: 'Limited' },
    { name: 'Elena Rossi', role: 'Product designer', workload: 68, availability: 'Available' },
    { name: 'Jordan Kim', role: 'Data analyst', workload: 105, availability: 'Over allocated' }
];

export const notifications = [
    { id: 1, title: 'You were assigned to “Review mobile navigation prototypes”.', time: '18 minutes ago', unread: true },
    { id: 2, title: 'Maya moved “Validate migration checklist” to In review.', time: 'Yesterday', unread: true },
    { id: 3, title: 'The Meridian migration deadline is in 23 days.', time: 'Monday', unread: false }
];
