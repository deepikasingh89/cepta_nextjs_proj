import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="col-2">
      <Link href="/">
        <Image src="/logo.png" alt={"logo"} width={140} height={70} />
      </Link>
    </div>
  );
};

export default Logo;
