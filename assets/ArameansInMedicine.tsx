import Image from "next/image";

interface ArameansInMedicinePngLogoProps {
  width?: number;
  height?: number;
}

const ArameansInMedicinePngLogo: React.FC<ArameansInMedicinePngLogoProps> = ({
  width = 50,
  height = 50,
}) => {
  return (
    <Image
      src="/arameans-in-medicine.png"
      width={width}
      height={height}
      alt="AIM logo"
    />
  );
};

export default ArameansInMedicinePngLogo;
