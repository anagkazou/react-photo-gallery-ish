import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = ({setSelectedImg}) => {
    const {docs} = useFirestore('images');
    console.log(docs)
    return (
        <div className="img-grid" >
            {
                docs && docs.map(doc => (
                    <div className="img-wrap" onClick={()=>setSelectedImg(doc.url)  } key={doc.id}>
                        <img src={doc.url} alt="uploaded-img" />
                    </div>
                ))
            } 
         </div>
    )
}

export default ImageGrid;
