import React, { useEffect, useState } from 'react';
import { storage } from '../config/firebase';
import {ref, uploadBytes,listAll, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid';
const imageListRef = ref(storage,"images/")
function Storage() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([])
    const uploadImage =()=>{
        if(imageUpload==null) return;
        const imageRef = ref(storage,`images/${imageUpload.name+ v4()}`);
        uploadBytes(imageRef,imageUpload).then(()=>{
            alert("Image Uploaded");
        })

    }
    useEffect(() => {
        listAll(imageListRef).then((response)=>{
            // console.log(response);
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev,url])
                })
            })
        })
    }, []);
  return (
    <div >
      <div className='flex flex-col justify-center items-center mt-6'>
        <input type="file" onChange={(e)=>setImageUpload(e.target.files[0])} />
        <button className='border p-3 m-4 bg-blue-400 rounded-full' onClick={uploadImage}>Upload Image</button>
        <br/> <br/>
        <div className='flex flex-row'>
        {imageList.map((url)=>{
            return <img className='flex flex-row' src={url} width={400} height={400}/>
        })}
        </div>
        
      </div>
    </div>
  )
}

export default Storage
