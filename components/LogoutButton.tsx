'use client';

import { logout } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

const LogoutButton = () => {
    const handleLogout = async () => {
        await logout();
        redirect('/sign-in');
    }; 

    return (
        <Button onClick={handleLogout}className="btn-link cursor-pointer">
            Logout
        </Button>
    )
}

export default LogoutButton