
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

import dynamic from "next/dynamic";

const ModeToggle = dynamic(() => import("@/components/ModeToggle"), { ssr: false });


export default function Home() {
  return (
   <div className="m-4">
      <h1>home page content</h1>
    
   </div>
  );
}
