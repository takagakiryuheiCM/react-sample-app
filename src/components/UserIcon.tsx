export function UserIcon({ imageUrl }: { imageUrl: string }) {
  return (
    <img
      src={imageUrl}
      alt="User Icon"
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  );
}
