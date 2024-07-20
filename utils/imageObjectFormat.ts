
import { FormDataObject } from "@/types";


export function imageObjectFormat(data:FormDataObject){
    let imageArray:any=[];
    Object.values(data).map((item)=>{
        const tempArr = Object.values(item)
        if(tempArr.some((elem)=>elem!=='')){
                imageArray.push({label:item.section,file:item.image})
        }
        
    }
    )
    console.log(imageArray);

    // console.log(data);
    return imageArray;   
}

// const handleUpload = (e: MouseEvent) => {
//     e.preventDefault();
//     if (images === undefined) return;
//     let imageArr: any = [];
//     Object.entries(images).forEach(([key, val]) => {
//       imageArr.push({ label: key, file: val });
//     });
//     upload(imageArr);
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//   };