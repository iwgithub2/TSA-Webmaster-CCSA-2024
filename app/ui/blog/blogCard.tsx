import Image from "next/image";

export default function BlogCard() {
    return (
        <div className="flex flex-row border-b-2 border-zinc-700">
            <div className="flex flex-col">

                <p>
                    Date: May 16th, 2024
                </p>
                <p className="font-bold">
                    Title
                </p>
                <p>
                    Lorem Ipsum asdlfjoidgjklsdfmglksdfngjksndfg skdjfgjksdnflgnsdlkfngklsndflkgslkdf gsljkl lfm
                    lkgsmdflgm dfmlksg mdflmgslkdmf
                </p>
            </div>
            <Image src={'/nature.webp'} alt={"sdff"} width={100} height={100}/>
        </div>

    );
}