import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer>
      <div className="h-4 text-center">
        <Drawer>
          <DrawerTrigger>ACCESS</DrawerTrigger>
          <DrawerContent>
            <DrawerTitle className="8">工房住所</DrawerTitle>
            <DrawerDescription>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.18272387588!2d135.96361017784068!3d35.077166972788255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60017409793d5a8f%3A0x443ed96a83ffac3e!2z44CSNTI0LTAwNjEg5ruL6LOA55yM5a6I5bGx5biC6LWk6YeO5LqV55S677yS77yW77yU!5e0!3m2!1sja!2sjp!4v1718207336041!5m2!1sja!2sjp"
                width="500"
                height="250"
                loading="lazy"
              ></iframe>
            </DrawerDescription>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">閉じる</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </footer>
  );
};

export default Footer;
