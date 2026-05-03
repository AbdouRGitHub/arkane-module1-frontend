import {TriangleAlert} from "lucide-react";

export function AnomalyCard({type = 'TOTAL_LINE', total = 10}: {
    type?: 'TOTAL_LINE' | 'MEDIUM' | 'IMPORTANT' | 'CRITICAL',
    total: number
}) {

    const borderColor = {
        TOTAL_LINE: 'border-blue-400',
        MEDIUM: 'border-yellow-500',
        IMPORTANT: 'border-amber-500',
        CRITICAL: 'border-red-500',
    }

    const color = {
        TOTAL_LINE: 'inherit',
        MEDIUM: 'text-yellow-600',
        IMPORTANT: 'text-orange-500',
        CRITICAL: 'text-red-500',
    }

    const title = {
        TOTAL_LINE: "Total de lignes",
        MEDIUM: 'Moyennes',
        IMPORTANT: 'Importantes',
        CRITICAL: 'Critiques',
    }

    return (
        <div
            className={`flex flex-col justify-start items-start gap-y-1 p-6 border-l-4 rounded-xl shadow-lg ${borderColor[type] || 'border-blue-400'}`}>
            <div className={`flex items-center gap-x-2 ${color[type] || 'text-gray-500'}`}>
                {
                    type != 'TOTAL_LINE' ? <TriangleAlert size={17}/> : null
                }
               <span className={"text-sm"}> {title[type]} </span>
            </div>
            <span className={`font-bold text-3xl ${color[type] || null}`}> {total} </span>
        </div>
    )
}