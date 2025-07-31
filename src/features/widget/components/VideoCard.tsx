import Text from "@/src/shared/ui/Text";

const VideoCard = () => {
  return (
    <div className="w-full h-[250px] border-none rounded-2xl shadow-lg p-7 flex flex-col gap-2 justify-center">
      <Text
        variant="subTitle"
        basicText={`Today's Media`}
        className="border-b border-gray-300 pb-3"
      />
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/rTQqrmhXgv8?si=slohym1XBB8sUqWK"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
