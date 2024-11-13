import Image from "next/image";
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 flex flex-row items-center justify-between">
                <Image alt="logo" src="/logo-junior.png" height={5} width={78} />
                <Button size="icon" variant="outline">
                    <MenuIcon />
                </Button>
            </CardContent>
        </Card>
    );
}

export default Header;