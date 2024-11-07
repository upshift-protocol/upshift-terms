import Image from "next/image";

export default function Logo({
  height = 60,
  width = 120,
}: {
  height?: number;
  width?: number;
}) {
    return (
      <Image 
        height={height}
        width={width}
        src="/upshift-wordmark-color.svg"
        alt="Upshift Finance"
      />
    )
}
