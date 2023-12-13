"use client";

interface IconButtonProp {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const IconButton: React.FC<React.PropsWithChildren<IconButtonProp>> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`cursor-pointer rounded-full p-2 hover:bg-neutral-800 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconButton;
