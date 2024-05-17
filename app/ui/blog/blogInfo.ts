export interface BlogCardProps {
    id: number;
    date: string;
    title: string;
    image: string;
    synopsis: string;
    blog: string;
    author: string;
    link: string;
}

const BlogData : BlogCardProps[] = [
    {
        id: 0,
        date: "March 16th, 2024",
        title: "What the Sigma 🤫🧏‍♂️",
        image:'/nature.webp',
        synopsis: "he he he he haw",
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue. Id nibh tortor id aliquet lectus proin nibh. Etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis dis parturient. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Convallis a cras semper auctor neque vitae tempus quam. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Hac habitasse platea dictumst vestibulum rhoncus est. At varius vel pharetra vel turpis nunc. Faucibus nisl tincidunt eget nullam non nisi est sit. Leo urna molestie at elementum eu facilisis sed odio. Ut etiam sit amet nisl purus. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Id diam vel quam elementum pulvinar. At tellus at urna condimentum.\n" +
            "\n" +
            "Proin nibh nisl condimentum id venenatis a. Eget mi proin sed libero enim sed faucibus turpis. Enim nunc faucibus a pellentesque sit. Sit amet aliquam id diam maecenas ultricies mi eget. Risus viverra adipiscing at in. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Lectus mauris ultrices eros in. Ornare lectus sit amet est placerat in. Purus semper eget duis at tellus at urna. Interdum posuere lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipiscing.\n" +
            "\n" +
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Euismod in pellentesque massa placerat duis ultricies. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Enim sit amet venenatis urna cursus. Egestas pretium aenean pharetra magna ac. Et netus et malesuada fames ac turpis egestas sed tempus. Lorem sed risus ultricies tristique. At quis risus sed vulputate odio ut enim blandit volutpat. Ut ornare lectus sit amet est. Viverra maecenas accumsan lacus vel facilisis volutpat. Dolor sit amet consectetur adipiscing.\n" +
            "\n" +
            "Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Habitant morbi tristique senectus et netus et malesuada fames ac. Duis convallis convallis tellus id interdum velit laoreet id donec. Pretium aenean pharetra magna ac placerat vestibulum lectus. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Volutpat consequat mauris nunc congue nisi vitae. Amet luctus venenatis lectus magna. Fermentum iaculis eu non diam. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. A lacus vestibulum sed arcu non. Mattis enim ut tellus elementum sagittis vitae et leo duis. Nec ullamcorper sit amet risus nullam eget. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Faucibus turpis in eu mi bibendum neque egestas. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Nisl tincidunt eget nullam non nisi est sit amet. Nibh ipsum consequat nisl vel pretium lectus quam. Enim ut tellus elementum sagittis. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices.\n" +
            "\n" +
            "Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Purus viverra accumsan in nisl. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Non blandit massa enim nec dui nunc mattis enim. Etiam tempor orci eu lobortis elementum. Non curabitur gravida arcu ac tortor. Dolor purus non enim praesent. Hac habitasse platea dictumst vestibulum. Amet mattis vulputate enim nulla aliquet porttitor. Tristique magna sit amet purus gravida quis blandit turpis. Augue lacus viverra vitae congue eu consequat.",
        author: "By Gayatri Padmanhampan",
        link: '/blog/whattheskibidi'
    }
];

export {BlogData};