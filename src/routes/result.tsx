import {createFileRoute} from '@tanstack/react-router'
import {AnomalyCard} from "#/components/AnomalyCard.tsx";

export const Route = createFileRoute('/result')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen gap-y-5">
            <AnomalyCard/>
        </main>
    )
}
