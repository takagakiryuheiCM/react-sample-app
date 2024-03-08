export function UserIcon({
  imageUrl,
  bigSize,
}: {
  imageUrl: string;
  bigSize?: boolean;
}) {
  return (
    <img
      src={imageUrl}
      alt="User Icon"
      style={{
        width: bigSize ? "200px" : "40px",
        height: bigSize ? "200px" : "40px",
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  );
}
