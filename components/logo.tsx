import Image from "next/image";

export const Logo = () => {
  return (
    <div className="p-5" >
      <Image
      height={130}
      width={130}
      alt="logo"
      src="/images/logo.png"
    />
    </div>
  )
}
