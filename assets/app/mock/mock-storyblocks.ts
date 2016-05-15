import {StoryBlock} from "../models/storyblock";

export const STORYBLOCKS:StoryBlock[] = <StoryBlock[]>[
    {
        blockId: 1,
        title: 'Preface',
        description: 'You need to start somewhere',
        timePosition: 1,
        importance: -1,
        blockNumber:0,
        type:'chapter'
    },
    {
        blockId: 2,
        title: 'Introduction',
        description: 'Where your characters became real',
        timePosition: 10,
        importance: 1,
        blockNumber:1,
        type:'chapter'
    },
    {
        blockId: 3,
        title: 'Evolution',
        description: 'Things gets trickier',
        timePosition: 10,
        importance: 2,
        blockNumber:2,
        type:'chapter'
    },
    {
        blockId: 4,
        title: 'Topic moment',
        description: 'Woah!',
        timePosition: 10,
        importance: 1,
        blockNumber:3,
        type:'chapter'
    },
    {
        blockId: 5,
        title: 'Epilogue',
        description: 'Because even the best things end',
        timePosition: 10,
        importance: -1,
        blockNumber:4,
        type:'chapter'
    }
];