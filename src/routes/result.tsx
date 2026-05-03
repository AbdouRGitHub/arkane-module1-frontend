import {createFileRoute} from '@tanstack/react-router'
import {AnomalyCard} from "#/components/AnomalyCard.tsx";

export const Route = createFileRoute('/result')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen max-w-3/4 m-auto gap-y-5">
            <h1 className="self-start text-2xl font-black"> Résultats de l'analyse </h1>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5">
                <AnomalyCard total={10}/>
                <AnomalyCard type="CRITICAL" total={10}/>
                <AnomalyCard type="IMPORTANT" total={10}/>
                <AnomalyCard type="MEDIUM" total={10}/>
            </div>
            {/* FILTRE */}
            <div></div>
            { /* TABLEAU */}
            <div></div>
        </main>
    )
}
