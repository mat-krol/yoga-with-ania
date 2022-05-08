import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type Props = {
  alt: string;
  src: StaticImageData | string;
};

export function LazyImage({ alt, src }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState<StaticImageData>();

  useEffect(() => {
    (async () => {
      const image = (await import(`../../public/images/${src}`)).default;

      setImage(image);
    })();
  }, []);

  if (!image) return null;

  return (
    <>
      <Image
        alt={alt}
        src={image}
        width="500px"
        height="500px"
        objectFit="cover"
        placeholder="blur"
        className={loaded ? "unblur" : ""}
        onLoadingComplete={() => setLoaded(true)}
      />
      <style jsx global>{`
        .unblur {
          animation: unblur 0.5s linear;
        }

        @keyframes unblur {
          from {
            filter: blur(20px);
          }
          to {
            filter: blur(0);
          }
        }
      `}</style>
    </>
  );
}
