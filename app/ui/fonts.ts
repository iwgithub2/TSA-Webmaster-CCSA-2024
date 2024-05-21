import {Inter, Newsreader, DM_Serif_Text, DM_Sans} from 'next/font/google';

export const newsreader = Newsreader({
    weight: ['400', '600', '700'],
    subsets: ['latin']
});

export const inter = Inter({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin']
});

export const dmSerif = DM_Serif_Text({weight: ['400'], subsets: ['latin']});

export const dmSans = DM_Sans({weight: ['400', '500', '700'], subsets: ['latin']});