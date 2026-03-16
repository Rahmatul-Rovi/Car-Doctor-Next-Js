import React from 'react'
import { FaGoogle, FaGithub } from "react-icons/fa"; // FaGithub যোগ করা হয়েছে

export default function SocialLogin() {
  return (
    <div>
      <div className="flex justify-center gap-4">
    {/* Google Login Button */}
    <button 
        onClick={() => signIn("google", { callbackUrl: "/" })}
        type="button" 
        className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#EA4335] hover:bg-[#ebedf0] text-xl"
    >
        <FaGoogle />
    </button>

    {/* GitHub Login Button */}
    <button 
        onClick={() => signIn("github", { callbackUrl: "/" })}
        type="button" 
        className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#333] hover:bg-[#ebedf0] text-xl"
    >
        <FaGithub />
    </button>
</div>
    </div>
  )
}
