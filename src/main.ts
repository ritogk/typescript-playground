import YouTubePlayer from "youtube-player"

export const main = async (): Promise<void> => {
  console.log("sample codeはここにカイテネ")

  const player = YouTubePlayer("sampleVideo1")
  player.loadVideoByUrl("https://youtu.be/cz3s7HG9v0E")
}

window.onload = () => {
  main()
}
