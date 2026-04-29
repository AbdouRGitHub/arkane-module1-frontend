import {Download} from "lucide-react";

export function DownloadExampleFileButton() {
    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = '/entreprises_10.csv';
        link.download = 'entreprises_10.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={downloadFile}
            className=" inline-flex items-center gap-x-1 h-auto w-auto py-3 px-2 bg-gray-200 rounded-xl text-black text-sm hover:bg-gray-300">
            <Download size={20}/>
            Télécharger un fichier exemple
        </button>
    )
}