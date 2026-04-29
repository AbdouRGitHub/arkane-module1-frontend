import {createFileRoute} from '@tanstack/react-router'
import FileDropZone from "#/components/FileDropZone.tsx";
import {DownloadExampleFileButton} from "#/components/DownloadExampleFileButton.tsx";
import {useState} from "react";
import Papa from "papaparse";
import {Play} from "lucide-react";

export const Route = createFileRoute('/')({component: Home})

function Home() {
    //const [exampleFile, setExampleFile] = useState<File | null>(null);
    const [previewData, setPreviewData] = useState<any[]>([]);

    const handleFile = (file: File) => {
        Papa.parse(file, {
            complete: (results) => {
                setPreviewData(results.data);
                console.log(results.data);
            },
        });
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen gap-y-5">
            <img src="/arkane-logo.svg" alt="logo" className="w-1/4 brightness-0"/>
            <div className="flex flex-col items-center justify-center rounded-xl gap-y-5 min-w-3/4 shadow-2xl p-8">
                <div className="w-full height-full">
                    <FileDropZone onDropFile={handleFile}/>
                </div>
                <DownloadExampleFileButton/>
            </div>
            {
                previewData.length > 0 ?
                    (
                        <div
                            className="flex flex-col items-center justify-center rounded-xl gap-y-5 max-w-3/4 shadow-2xl p-8 overflow-hidden">
                            <h1 className="font-bold"> Aperçu </h1>
                            <table
                                className="table-auto w-full md:table-fixed">
                                <thead className="bg-gray-200 border-b-2 border-gray-300 text-left">
                                <tr>
                                    {
                                        previewData[0].map((header: string, index: number) => (
                                            <th className="p-3 text-gray-700" key={index}>{header}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    previewData.slice(1, 6).map((row: any, rowIndex: number) => (
                                            <tr key={rowIndex}>
                                                {
                                                    row.map((cell: any, cellIndex: number) => (
                                                        <td className={`border-b border-b-gray-300 p-3 ${rowIndex % 2 === 1 && "bg-gray-200"} text-gray-600`}
                                                            key={cellIndex}>{cell}</td>
                                                    ))
                                                }
                                            </tr>
                                        )
                                    )
                                }
                                </tbody>
                            </table>
                            <button
                                className="inline-flex w-full justify-center items-center gap-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                <Play/>
                                <span>Lancer le traitement</span>
                            </button>
                        </div>
                    ) : null
            }
        </main>
    )
}
