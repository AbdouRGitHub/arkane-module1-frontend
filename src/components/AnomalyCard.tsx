import {TriangleAlert} from "lucide-react";

export function AnomalyCard({type = 'CRITICAL', total = 10}: {
    type?: 'MEDIUM' | 'IMPORTANT' | 'CRITICAL',
    total: number
}) {

    const borderColor = {
        MEDIUM: 'border-yellow-500',
        IMPORTANT: 'border-amber-500',
        CRITICAL: 'border-red-500',
    }

    const color = {
        MEDIUM: 'text-yellow-600',
        IMPORTANT: 'text-orange-500',
        CRITICAL: 'text-red-500',
    }

    const title = {
        DEFAULT: "Total de lignes",
        MEDIUM: 'Moyennes',
        IMPORTANT: 'Importantes',
        CRITICAL: 'Critiques',
    }

    return (
        <div
            className={`flex flex-col justify-start items-start gap-y-1 p-6 border-l-4 rounded-xl shadow-lg ${borderColor[type] || 'border-blue-400'}`}>
            <div className={`flex items-center gap-x-2 ${color[type] || 'text-gray-500'}`}>
                <TriangleAlert size={17}/>
                <span className={"text-sm"}> {title[type]} </span>
            </div>
            <span className={`font-bold text-3xl ${color[type] || null}`}> {total} </span>
        </div>
    )
}