import {useDropzone} from "react-dropzone";
import {useCallback} from "react";
import {FileSpreadsheet, Upload} from "lucide-react";



export default function FileDropZone({onDropFile} : {onDropFile: (file: File) => void}) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onDropFile(acceptedFiles[0]);
    }, []);

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop, accept: {
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
            'text/csv': ['.csv'],
        },
        maxFiles: 1,
    });

    return (
        <div {...getRootProps()}
             className={`w-full h-full border-2 rounded-sm border-dashed bg-gray-100 border-gray-300 cursor-pointer hover:border-blue-400 ${
                 isDragActive ? 'bg-green-200' : ''
             }`}>
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center h-full p-8">
                {
                    acceptedFiles.length > 0 ? (<FileSpreadsheet size={40} color="green"/>) : (<Upload size={40}/>)
                }
                {
                    acceptedFiles.length > 0 ? <p>{acceptedFiles[0].name}</p> : (isDragActive ?
                        <p> Relâchez le fichier ici </p> : <p>Glissez-déposez votre fichier ici</p>)
                }
                <p className="italic text-sm text-gray-500 text-center">(Format CSV/XLSX uniquement)</p>
            </div>
        </div>
    )
}
