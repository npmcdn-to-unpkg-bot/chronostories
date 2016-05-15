import {StoryBlock} from "../models/storyblock";
import {StoryBlockType} from "../models/storyblock-type";

export const STORYBLOCK_TYPES:StoryBlockType[] = <StoryBlockType[]>[
    {
        id: 'chapter',
        name: 'Chapter',
        level: 0
    },
    {
        id: 'paragraph',
        name: 'Paragraph',
        level: 1
    },
];