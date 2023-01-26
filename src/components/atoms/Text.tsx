interface IState {
    text: string,
    textType: TextType,
}

export enum TextType {
    Title = "title",
    SubTitle = "subTitle",
    Regular = "regular"
}

export default function Text({ text, textType }: IState) {
    // 64 Extra Bold
    // 40 Extra Bold
    // 24 Regular
    
    switch(textType) {
        case 'title':
            return (
                <h1>
                    
                </h1>
            )
        case 'subTitle':
            return (
                <p>
                    
                </p>
            )
        case 'regular':
            return (
                <p>
                    
                </p>
            )
    }
   
}
