const SingleInfo = ({ text, Image, href }) => {
  return (
    <a
      href={href}
      className="flex gap-4 items-center justify-start hover:underline text-xl"
      target="_blank"
    >
      <Image className="text-3xl" />
      <p>{text}</p>
    </a>
  );
};

export default SingleInfo;
