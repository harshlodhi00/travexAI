export default function YoutubeEmbed() {
  return (
    <div className="w-[100vw] h-[80vh] bg-black px-[150px] py-10 flex flex-col items-center justify-start ">
      <div className="mb-6 font-[600] text-white text-[35px] ">
        Watch how it works
      </div>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/ZuZTxJz7tB8?si=b-6VoblNKJCeRUcb"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
