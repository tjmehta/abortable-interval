export default function abortableInterval(duration: number, signal: AbortSignal, callback: () => unknown) {
  if (signal.aborted) return
  const intervalId = setInterval(callback, duration)
  signal.addEventListener('abort', function handleAbort() {
    signal.removeEventListener('abort', handleAbort)
    clearInterval(intervalId)
  })
}
