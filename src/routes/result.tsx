import {createFileRoute} from '@tanstack/react-router'
import {AnomalyCard} from "#/components/AnomalyCard.tsx";
import {Funnel} from "lucide-react";

export const Route = createFileRoute('/result')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className="flex flex-col items-center justify-start min-h-screen max-w-3/4 m-auto gap-y-5 p-8">
            <h1 className="self-start text-2xl font-black"> Résultats de l'analyse </h1>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5">
                <AnomalyCard total={10}/>
                <AnomalyCard type="CRITICAL" total={10}/>
                <AnomalyCard type="IMPORTANT" total={10}/>
                <AnomalyCard type="MEDIUM" total={10}/>
            </div>
            {/* FILTRE */}
            <div className="flex flex-col justify-start w-full gap-y-4 rounded-xs shadow-lg p-4">
                <div className="flex items-center gap-x-2">
                    <Funnel/>
                    <h1 className="text-xl font-bold"> Filtres </h1>
                </div>
                <div className="flex flex-col gap-x-2 sm:flex-row">
                    <div className="flex flex-1 flex-col gap-y-2">
                        <label> Code anomalie </label>
                        <select className="w-full border rounded-xl border-gray-300 px-4 py-2">
                            <option>Tous les codes</option>
                            <option>ANO-01</option>
                            <option>ANO-02</option>
                            <option>ANO-03</option>
                            <option>ANO-04</option>
                            <option>ANO-05</option>
                        </select>
                    </div>
                    <div className="flex flex-1 flex-col gap-y-2">
                        <label> Niveau de criticité </label>
                        <select className="w-full border rounded-xl border-gray-300 px-4 py-2">
                            <option>Tous les niveaux</option>
                            <option>Critique</option>
                            <option>Importante</option>
                            <option>Moyenne</option>
                        </select>
                    </div>
                </div>
            </div>
            { /* TABLEAU */}
            <div></div>
        </main>
    )
}
