import {
    brushIcon,
    editToolsIcon,
    minWidthIcon,
    arrowsLeftRightIcon,
} from "@progress/kendo-svg-icons";

/* eslint-disable max-len */

export const unknownRequest =
    "The request cannot be processed at this time. Please excuse us for the inconvenience.";

export const promptCommands = [
   {
        id: '1',
        title: 'Change Formality',
        svgIcon: brushIcon,
        items: [
            {
                id: '1_1',
                title: 'Casual',
                prompt: (selection) =>
                    'You are working with this text: `' +
                    selection +
                    '`Change its formality to casual and return only the result.'
            },
            {
                id: '1_2',
                title: 'Neutral',
                prompt: (selection) =>
                    'You are working with this text: `' +
                    selection +
                    '`Change its formality to neutral and return only the result.'
            },
            {
                id: '1_3',
                title: 'Formal',
                prompt: (selection) =>
                    'You are working with this text: `' +
                    selection +
                    '`Change its formality to formal and return only the result.'
            }
        ]
    },
    {
        id: '2',
        title: 'Translate',
        svgIcon: editToolsIcon,
        items: [
            {
                id: '2_1',
                title: 'German',
                prompt: (selection) =>
                    'Translate this text to German: `' + selection + '` and return just the translated text'
            },
            {
                id: '2_2',
                title: 'Spanish',
                prompt: (selection) =>
                    'Translate this text to Spanish: `' + selection + '` and return just the translated text'
            },
            {
                id: '2_3',
                title: 'English',
                prompt: (selection) =>
                    'Translate this text to English: `' + selection + '` and return just the translated text'
            }
        ]
    },
    {
        id: '3',
        title: 'Simplify',
        svgIcon: minWidthIcon,
        prompt: (selection) =>
            'You are working with this text: `' + selection + '`\nSimplify it and return just the simplified text'
    },
    {
        id: '4',
        title: 'Expand',
        svgIcon: arrowsLeftRightIcon,
        prompt: (selection) =>
            'You are working with this text: `' + selection + '`\nExpand it and return just the expanded text'
    }
];
