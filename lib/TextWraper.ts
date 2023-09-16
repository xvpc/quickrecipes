export default function TextWrap(text: string) {
    if(text.length > 20)
        return text.slice(0, 20) + '...';
    else
        return text;
    
}
