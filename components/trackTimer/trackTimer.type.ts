export type Props = {
    sendTurn: (time:number)=>void
}

export type UseProps = {
    timer: number,
    start:boolean,
    timerString: string
    startAndStop: ()=>void
    reset:  ()=>void
}